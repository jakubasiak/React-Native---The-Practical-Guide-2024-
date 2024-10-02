import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#533102' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#7b4904' },
    drawerContentStyle: { backgroundColor: '#533102' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: 'white',
    drawerActiveBackgroundColor: '#7b4904'
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size }) => (<Ionicons color={color} size={size} name='list' />)
    }} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
      title: 'Favorites',
      drawerIcon: ({ color, size }) => (<Ionicons color={color} size={size} name='heart' />)
    }} />
  </Drawer.Navigator>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#533102' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#7b4904' }
          }}>
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
              headerShown: false
            }} />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
              title: 'About the Meal'
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
