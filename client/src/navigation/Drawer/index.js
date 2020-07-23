import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Menu from '../Menu';
import {navigationRef} from '../RootNavigation';
import HomeScreen from '../../screens/Home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <Menu {...props} />}>
        <Drawer.Screen
          name="Actual"
          component={HomeScreen}
          initialParams={{city: ''}}
          options={{title: 'Ciudad Actual'}}
        />
        <Drawer.Screen
          name="Caracas"
          component={HomeScreen}
          initialParams={{city: 'Caracas'}}
        />
        <Drawer.Screen
          name="Barquisimeto"
          component={HomeScreen}
          initialParams={{city: 'barquisimeto'}}
        />
        <Drawer.Screen
          name="Maracay"
          component={HomeScreen}
          initialParams={{city: 'maracay'}}
        />
        <Drawer.Screen
          name="Maracaibo"
          component={HomeScreen}
          initialParams={{city: 'maracaibo'}}
        />
        <Drawer.Screen
          name="Barinas"
          component={HomeScreen}
          initialParams={{city: 'barinas'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
