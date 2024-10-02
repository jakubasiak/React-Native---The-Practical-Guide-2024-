import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";


export default function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoriteContext);
  const favoriteMeasls = MEALS.filter(m => favoriteMealsCtx.ids.includes(m.id));

  if (favoriteMeasls.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <MealsList items={favoriteMeasls} />
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});
