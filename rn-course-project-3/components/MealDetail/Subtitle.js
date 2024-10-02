import { Text, StyleSheet } from "react-native";

export default function Subtitle({ children }) {
  return (
    <Text style={styles.subtitle}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  }
});