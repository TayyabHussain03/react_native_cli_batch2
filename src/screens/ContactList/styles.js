import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,          // ✅ FlatList ko expand karne ke liye
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,  // ✅ Top & bottom spacing
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,     // ✅ Space after heading
  }
});
