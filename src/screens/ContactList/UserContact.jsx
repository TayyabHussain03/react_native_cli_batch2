import React from 'react';
import { Text, FlatList } from 'react-native';
import {users} from './users';
import UserList from '../../components/UserList';
import { styles } from './styles';

const UserContact = () => {
  const renderItem = ({ item }) => (
    <UserList name={item.name} email={item.email} />
  );

  return (
    <FlatList
      data={users} // ✅ Array of items
      renderItem={renderItem} // ✅ Function to render each item
      keyExtractor={(item) => item.id.toString()} // ✅ Unique key
      contentContainerStyle={styles.listContainer} // ✅ Main list styling
      showsVerticalScrollIndicator={false} // ✅ Hide scrollbar
      ListHeaderComponent={<Text style={styles.heading}>Contact</Text>} // ✅ Heading
    />
  );
};

export default UserContact;




