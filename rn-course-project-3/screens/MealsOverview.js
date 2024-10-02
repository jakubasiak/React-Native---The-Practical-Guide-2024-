import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

export default function MealsOverview({ route, navigation }) {
  const category = route.params.category;
  const dispalyedMeasls = MEALS.filter(m => m.categoryIds.includes(category.id));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category.title,
      contentStyle: { backgroundColor: CATEGORIES.find(c => c.id === category.id).color }
    });
  }, []);

  function onPressHandler(id) {
    navigation.navigate('MealDetail', { mealId: id });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dispalyedMeasls}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem {...item} onPress={onPressHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
