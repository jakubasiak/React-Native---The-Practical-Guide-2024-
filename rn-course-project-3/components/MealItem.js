import React from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import MealDetails from './MealDetails';

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability, onPress }) {
  return (
    <View style={styles.mealItem}>
      <Pressable onPress={() => onPress(id)} android_ripple={{ color: '#ccc' }}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  }
});