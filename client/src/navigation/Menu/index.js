import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles.js';
import Images from '../../assets/images';
import {DrawerItemList} from '@react-navigation/drawer';

export default function Menu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgContainer}>
        <TouchableOpacity>
          <View style={styles.userContainer}>
            <Image source={Images.cities} style={styles.userImage} />
          </View>
          <View style={styles.userTitle}>
            <Text style={styles.userText}>Buscar por ciudad</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
}
