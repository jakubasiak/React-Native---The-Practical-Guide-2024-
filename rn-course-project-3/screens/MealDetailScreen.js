import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
// import { FavoriteContext } from '../store/context/favorites-context';

export default function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsCtx = useContext(FavoriteContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const mealIsFavorite = favoriteMealIds.includes(mealId);
  const selectedMeal = MEALS.find(m => m.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={changeFavoriteStatusHandler} icon={mealIsFavorite ? 'heart' : 'heart-outline'} color='white' />;
      }
    });
  }, [navigation, changeFavoriteStatusHandler]);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails {...selectedMeal} />
      <Subtitle>Ingidients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
});
