import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import styles from './styles'
import {useFonts, Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu'
import {useNavigation} from '@react-navigation/native'
import type {MenuType} from '../../types'

interface RestuarantComponentProps{
    restuarant: {
        id: Number | String | string,
        name: String | string,
        image: string,
        rating: Number | number,
        menu: Array<MenuType>
    }
}

const RestuarantComponent = (props: RestuarantComponentProps) => {

  const {restuarant} = props
  const [fontsLoaded] = useFonts({
      Ubuntu_300Light,
      Ubuntu_400Regular,
      Ubuntu_500Medium
  })

  const navigation = useNavigation()

  const onExploreClick = () => {
    navigation.navigate('Menu', {
      name: restuarant.name,
      menu: restuarant.menu,
      restuarantImage: restuarant.image
    })
  }

  return (
    <View style={styles.RestuarantContainer}>
      <Image source={{uri: restuarant.image}} style={styles.ImageStyles} />
      <View style={styles.RightContainer}>
          {
              (fontsLoaded) && (
                  <>
                    <Text style={styles.TitleText}>{restuarant.name}</Text>
                    <Text style={styles.RatingText}>⭐ {" " + restuarant.rating}</Text>
                    <Pressable style={styles.ExploreButton} onPress={onExploreClick}>
                        <Text style={styles.ExploreButtonText}>Explore</Text>
                    </Pressable>
                  </>
              )
          }
      </View>
    </View>
  );
};

export default RestuarantComponent;
