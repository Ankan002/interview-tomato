import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import InternalHeader from '../../components/InternalHeader';
import MenuCard from '../../components/MenuCard';

const Menu = () => {

  const route = useRoute<any>()
  const {menu, name, restuarantImage} = route.params

  return (
    <View style={styles.AndroidSafeAreaView}>
      <InternalHeader title={name} />
      <FlatList 
        data={menu}
        renderItem={({item, index}) => <MenuCard id={item.id} name={item.name} image={item.image} price={item.price} storeName={name} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Menu;
