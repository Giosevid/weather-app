import * as React from 'react';
import {View, Text} from 'react-native';
import Layout from '../../components/layout';
import {getForecastApi} from '../../api/forecast';
import ListItem from '../../components/listItem';
import styles from './styles';
import LoadingScreen from '../../components/loading';

export default function HomeScreen({navigation, route}) {
  const [weather, setWeather] = React.useState('');
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    getForecastApi(route?.params?.city).then((result) => {
      setWeather(result);
      setloading(false);
    });
  }, [route?.params?.city]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Layout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>{weather?.city}</Text>
        <Text style={styles.subtitle}>{weather?.weekDay}</Text>
        <Text style={styles.textTemp}>{Math.round(weather?.temp)}º</Text>
      </View>
      <ListItem list={weather?.list} />
    </Layout>
  );
}