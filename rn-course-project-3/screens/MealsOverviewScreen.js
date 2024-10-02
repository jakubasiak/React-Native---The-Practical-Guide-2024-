import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const category = route.params.category;
  const dispalyedMeasls = MEALS.filter(m => m.categoryIds.includes(category.id));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category.title,
      contentStyle: { backgroundColor: CATEGORIES.find(c => c.id === category.id).color }
    });
  }, []);

  return (
    <MealsList items={dispalyedMeasls} />
  );
}
