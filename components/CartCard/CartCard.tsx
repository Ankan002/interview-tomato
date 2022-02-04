import { View, Text, Image, Pressable } from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil'
import {ItemsCountState} from '../../atom/itemsCountAtom'
import {ItemsInCart} from '../../atom/itemsInCartAtom'
import {getCurrentItemCount} from '../../helpers/currentItemCount'
import { FontAwesome } from '@expo/vector-icons';
import {useFonts, Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu'
import styles from './styles'

interface CartCardProps{
    id: number | Number,
    name: String | string,
    image: string,
    price: number | Number,
    storeName: String | string
}

const CartCard = (props: CartCardProps) => {

  const {id, name, image, price, storeName} = props
  const [itemsCount, setItemsCount] = useRecoilState<any>(ItemsCountState)
  const [cartItems, setCartItems] = useRecoilState<any>(ItemsInCart)
  const [presentItemCount, setPresentItemCount] = useState(0)

  useEffect(() => {
    setPresentItemCount(getCurrentItemCount(cartItems, id))
  }, cartItems)

  const onReduceClick = () => {
    if(presentItemCount === 1){
        setCartItems(cartItems.filter((item: any) => item.id !== id))
        setItemsCount(itemsCount - 1)
        setPresentItemCount(presentItemCount - 1)
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
    <View style={styles.CartCardContainer}>
      <Image source={{uri: image}} style={styles.ImageStyle} />
      <View style={styles.RightContainer}>
      {
              (fontsLoaded) && (
                  <>
                  <Text style={styles.TitleText}>{name}</Text>
                  <Text style={styles.StoreNameText}>{storeName}</Text>
                  <Text style={styles.PriceText}>{`₹ ${price}`}</Text>
                  <View style={styles.ControlButtonsContainer}>
                        <Pressable style={styles.OperationButton} onPress={onReduceClick}>
                            <FontAwesome name="minus" size={24} color="#FFC600" />
                        </Pressable>
                        <View style={styles.CurrentCountContainer}>
                            <Text style={styles.CountText}>{presentItemCount}</Text>
                        </View>
                        <Pressable style={styles.OperationButton} onPress={onIncreaseClick}>
                            <FontAwesome name="plus" size={24} color="#FFC600" />
                        </Pressable>
                 </View>
                  
                  </>
              )
          }
      </View>
    </View>
  );
};

export default CartCard;
