import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Header({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <FontAwesome5
          name={'bars'}
          solid
          size={30}
          style={{padding: 16}}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}
