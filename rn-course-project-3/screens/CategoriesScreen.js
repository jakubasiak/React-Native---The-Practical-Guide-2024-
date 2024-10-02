import React from 'react';
import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({ navigation }) {

  function onPressHandler(item) {
    navigation.navigate('MealsOverview', { category: item });
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <CategoryGridTile
          onPress={() => onPressHandler(itemData.item)}
          title={itemData.item.title}
          color={itemData.item.color} />}
        numColumns={2}
      />
    </View>
  );
}
