import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './styles';

export default function ListItems({list}) {
  const renderItem = ({item}) => {
    const {
      weekDay,
      main: {temp},
    } = item;
    return (
      <View style={styles.container}>
        <Text style={styles.textRed}>{weekDay}</Text>
        <Text style={styles.textRed}>{Math.round(temp)}º</Text>
      </View>
    );
  };

  return (
    <View>
      <Card
        titleStyle={styles.titleCard}
        title="Next days"
        containerStyle={styles.contentCard}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
        />
      </Card>
    </View>
  );
}
