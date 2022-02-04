import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import {
  useFonts,
  Ubuntu_300Light
} from '@expo-google-fonts/ubuntu';


interface CartIconProps{
    color: string | undefined;
    NumberOfItems: Number;
    positionLeft: Number
}

const CartIcon = (props: CartIconProps) => {

  const {color, NumberOfItems, positionLeft} = props
  const [fontsLoaded] = useFonts({Ubuntu_300Light})

  return (
    <>
      <AntDesign name="shoppingcart" size={30} color={color} style={{position: 'relative'}} />
      <View style={[styles.NumberContainer, {backgroundColor: color, left: `${positionLeft}%`}]}>
        {
          (fontsLoaded) && (
            <Text style={styles.NumDesign}>{NumberOfItems}</Text>
          )
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  NumberContainer: {
    height: 14,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 6,
    left: '52%',
    borderRadius: 50
  },
  NumDesign: {
    fontSize: 12,
    color: '#5800FF',
    fontFamily: 'Ubuntu_300Light',
    marginTop: -1.5
  }
})

export default CartIcon;
