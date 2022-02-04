import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const CartHeader = () => {

  const navigation = useNavigation()

  const onBackClick = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.HeaderContainer}>
      <Pressable onPress={onBackClick}>
        <Ionicons name="chevron-back-outline" size={24} color="#FFC600" />
      </Pressable>
      <Text style={styles.HeaderText}>Cart</Text>
    </View>
  );
};

export default CartHeader;
