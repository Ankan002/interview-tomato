import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { useFonts, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';

interface CommonHeaderProps{
  title: string | String;
}

const CommonHeader = (props: CommonHeaderProps) => {
  const {title} = props

  const [fontsLoaded] = useFonts({Ubuntu_500Medium})

  return (
    <View style={styles.headerContainer}>
      {
        (fontsLoaded) && (
          <Text style={styles.headerText}>{title}</Text>
        )
      }
    </View>
  );
};

export default CommonHeader;
