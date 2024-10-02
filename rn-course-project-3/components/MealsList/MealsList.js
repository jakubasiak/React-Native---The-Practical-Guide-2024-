import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ items }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem {...item} />}
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