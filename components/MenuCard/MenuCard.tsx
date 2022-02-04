import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from './styles'
import {useFonts, Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu'
import {useRecoilState} from 'recoil'
import {ItemsCountState} from '../../atom/itemsCountAtom'
import {ItemsInCart} from '../../atom/itemsInCartAtom'
import {isItemInCart} from '../../helpers/isItemInCart'
import {getCurrentItemCount} from '../../helpers/currentItemCount'
import { FontAwesome } from '@expo/vector-icons';

interface MenuCardProps{
    id: number | Number,
    name: String | string,
    image: string,
    price: number | Number,
    storeName: String | string
}

const MenuCard = (props: MenuCardProps) => {

  const {id, name, image, price, storeName} = props
  const [itemsCount, setItemsCount] = useRecoilState<any>(ItemsCountState)
  const [cartItems, setCartItems] = useRecoilState<any>(ItemsInCart)
  const [isItemThere, setIsItemThere] = useState(isItemInCart(cartItems, id))
  const [presentItemCount, setPresentItemCount] = useState(getCurrentItemCount(cartItems, id))

  const onAddToCartClick = () => {
      const currentItem = {
          ...props,
          quantity: 1
      }
      setCartItems([currentItem].concat(cartItems))
      setItemsCount(itemsCount + 1)
      setPresentItemCount(presentItemCount + 1)
      setIsItemThere(true)
  }

  const onReduceClick = () => {
      if(presentItemCount === 1){
          setCartItems(cartItems.filter((item: any) => item.id !== id))
          setItemsCount(itemsCount - 1)
          setPresentItemCount(presentItemCount - 1)
          setIsItemThere(false)
      }
      else{
        setCartItems(cartItems.map((item: any) => {
            if(item.id !== id) return item
            return{
                ...item,
                quantity: item.quantity - 1
            }
        }))
        setItemsCount(itemsCount - 1)
        setPresentItemCount(presentItemCount - 1)
      }
  }

  const onIncreaseClick = () => {
      setCartItems(cartItems.map((item: any) => {
          if(item.id !== id) return item
          return{
              ...item,
              quantity: item.quantity + 1
          }
      }))
      setItemsCount(itemsCount + 1)
      setPresentItemCount(presentItemCount + 1)
  }

  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium
  })

  return (
    <View style={styles.MenuCardContainer}>
      <Image source={{uri: image}} style={styles.ImageStyle} />
      <View style={styles.RightContainer}>
          {
              (fontsLoaded) && (
                  <>
                  <Text style={styles.TitleText}>{name}</Text>
                  <Text style={styles.PriceText}>{`₹ ${price}`}</Text>
                  {
                      (!isItemThere) ? (
                        <Pressable style={styles.PriceButton} onPress={onAddToCartClick}>
                            <Text style={styles.PriceButtonText}>Add to Cart</Text>
                        </Pressable>
                      ) : (
                        <View style={styles.ControlButtonsContainer}>
                            <Pressable style={styles.OperationButton} onPress={onReduceClick}>
                                <FontAwesome name="minus" size={24} color="#FFC600" />
                            </Pressable>
                            <View style={styles.CurrentCountContainer}>
                                <Text style={styles.PriceButtonText}>{presentItemCount}</Text>
                            </View>
                            <Pressable style={styles.OperationButton} onPress={onIncreaseClick}>
                                <FontAwesome name="plus" size={24} color="#FFC600" />
                            </Pressable>
                        </View>
                      )
                  }
                  
                  </>
              )
          }
          
      </View>
    </View>
  );
};

export default MenuCard;
