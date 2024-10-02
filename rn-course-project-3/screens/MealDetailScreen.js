import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

export default function MealDetailScreen({ route, navigation }) {
  const selectedMeal = MEALS.find(m => m.id === route.params.mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={headerButtonPressHandler} icon='heart' color='white' />;
      }
    });
  }, [navigation, headerButtonPressHandler]);

  function headerButtonPressHandler() {
    console.log('Press');
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
