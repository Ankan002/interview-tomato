/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect} from 'react';
import { Entypo } from '@expo/vector-icons';
import { useRecoilState, useRecoilValue } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Resturants from '../screens/Resturants';
import { NavigationTheme } from '../theme/NavigationTheme';
import Cart from '../screens/Cart';
import { ItemsInCart } from '../atom/itemsInCartAtom';
import CartIcon from '../components/CartIcon';
import Menu from '../screens/Menu';
import { ItemsCountState } from '../atom/itemsCountAtom';
import { getItemsCountInCart } from '../helpers/countItems';
import InnerCart from '../screens/InnerCart';

export default function Navigation() {
  const [cartItems, setCartItems] = useRecoilState(ItemsInCart)
  const [itemsCount, setItemsCount] = useRecoilState(ItemsCountState)

  const getCartItems = async() => {
    const ItemsInStore = await AsyncStorage.getItem('cart-items')
    console.log(ItemsInStore)

    if(!ItemsInStore){
      await AsyncStorage.setItem('cart-item', JSON.stringify([]))
      setCartItems([])
      setItemsCount(0)
    }
    else{
      const AllItems = JSON.parse(ItemsInStore)
      setCartItems(AllItems)
      const count = getItemsCountInCart(AllItems)
      setItemsCount(count)
    }
  }

  const storageSetter = async() => {
    await AsyncStorage.setItem('cart-item', JSON.stringify(cartItems))
  }
  storageSetter()

  useEffect(() => {
    getCartItems()
  }, [])

  useEffect(() => {
    
  }, [cartItems])

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={NavigationTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}} />
      <Stack.Screen name='Cart' component={InnerCart} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();


function BottomTabNavigator() {
  const itemsCount = useRecoilValue(ItemsCountState)

  return (
    <BottomTab.Navigator
      initialRouteName="Restuarants"
      screenOptions={{
        tabBarActiveTintColor: '#E900FF',
        tabBarInactiveTintColor: '#FFC600',
        tabBarShowLabel: false
      }}>
      <BottomTab.Screen
        name="Restuarants"
        component={Resturants}
        options={{
          title: 'Restuarants',
          tabBarIcon: ({ color }) => <Entypo name="shop" size={30} color={color} />,
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <CartIcon color={color} NumberOfItems={itemsCount} positionLeft={52} />,
          headerShown: false
        }}
      />
    </BottomTab.Navigator>
  );
}


