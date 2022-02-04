import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
import CartIcon from '../CartIcon'
import {useRecoilValue} from 'recoil'
import {ItemsCountState} from '../../atom/itemsCountAtom'
import {useNavigation} from '@react-navigation/native'

interface InternalHeaderProps{
    title: String | string;
}

const InternalHeader = (props: InternalHeaderProps) => {

  const {title} = props
  const itemsCount = useRecoilValue(ItemsCountState)
  const navigation = useNavigation()

  const onBackClick = () => {
    navigation.goBack()
  }

  const onCartClick = () => {
    navigation.navigate('Cart')
  }

  return (
    <View style={styles.HeaderContainer}>
      <Pressable onPress={onBackClick}>
        <Ionicons name="chevron-back-outline" size={24} color="#FFC600" />
      </Pressable>
      <Text style={styles.HeaderText}>{title}</Text>
      <View style={styles.CartContainer}>
        <Pressable style={styles.Button} onPress={onCartClick}>
          <CartIcon NumberOfItems={itemsCount} color='#FFC600' positionLeft={9} />
        </Pressable>
      </View>
    </View>
  );
};

export default InternalHeader;
