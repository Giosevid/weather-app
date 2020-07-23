import * as React from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './styles';
import images from '../../assets/images';
import Header from '../Header';

export default function Layout({children, navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={images.backgroundDay} style={styles.image}>
        <Header navigation={navigation} />
        {children}
      </ImageBackground>
    </View>
  );
}
