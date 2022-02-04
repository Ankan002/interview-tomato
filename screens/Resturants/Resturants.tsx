import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import CommonHeader from '../../components/CommonHeader';
import { StatusBar } from 'expo-status-bar';
import { FakeRestutants } from '../../constants/FakeResturants';
import RestuarantComponent from '../../components/RestuarantComponent';

const Resturants = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeAreaView}>
      <StatusBar backgroundColor='#5800FF' />
      <CommonHeader title='Restuarants' />
      <View style={styles.BodyContainer}>
        <FlatList 
          data={FakeRestutants}
          renderItem={({item, index}) => <RestuarantComponent restuarant={item}/>}
          keyExtractor={(item) => (item.id).toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Resturants;
