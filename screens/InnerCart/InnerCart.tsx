import { View, Text, SafeAreaView, FlatList, Image, Pressable, Alert } from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import CartHeader from '../../components/CartHeader/CartHeader';
import { StatusBar } from 'expo-status-bar';
import { useRecoilState } from 'recoil';
import { ItemsCountState } from '../../atom/itemsCountAtom';
import { ItemsInCart } from '../../atom/itemsInCartAtom';
import CartCard from '../../components/CartCard';
import {useFonts, Ubuntu_500Medium, Ubuntu_700Bold} from '@expo-google-fonts/ubuntu'
import { getTotalPrice } from '../../helpers/getTotalPrice';

const emptyImage = require('../../assets/images/empty.png')

const InnerCart = () => {
  const [itemCount, setItemsCount] = useRecoilState<any>(ItemsCountState)
  const [cartItems, setCartItems] = useRecoilState<any>(ItemsInCart)
  const [fontsLoaded] = useFonts({Ubuntu_500Medium})
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalPrice(getTotalPrice(cartItems))
  }, [cartItems])

  const onPaymentClick = () => {
    Alert.alert('Sure!!','Are you wanna pay for it?',[
      {
        text: 'Yup',
        onPress: () => {
          setCartItems([]),
          setItemsCount(0)
        } 
      },
      {
        text: 'Nope',
        onPress: () => console.log('None'),
        style: 'cancel'
      }
    ])
  }

  return (
    <SafeAreaView style={styles.AndroidSafeAreaView}>
      <StatusBar backgroundColor='#5800FF' />
      <CartHeader />
      {
        (itemCount < 1) ? (
          <View style={styles.EmptyScreen}>
            <Image source={emptyImage} style={styles.EmptyImage} />
            {
              (fontsLoaded) && (
                <Text style={styles.EmptyTextStyle}>Nothing in Cart</Text>
              )
            }
          </View>
        ) : (
          <View style={styles.FlexingView}>
            <View>
            <FlatList 
              data={cartItems}
              renderItem={({item, index}) => <CartCard id={item.id} name={item.name} price={item.price} image={item.image} storeName={item.storeName} />}
              keyExtractor={(item) => item.id}
              style={styles.FlatListStyle}
            />
            </View>
            
            
            {
              (fontsLoaded) && (
                <View style={styles.PriceContainer}>
                  <Text style={styles.PriceText}>₹ {totalPrice}</Text>
                  <Pressable style={styles.PayButton} onPress={onPaymentClick}>
                    <Text style={styles.PayButtonText}>Pay Now</Text>
                  </Pressable>
                </View>
              )
            }
            
          </View>
        )
      }
    </SafeAreaView>
  )
};

export default InnerCart;
