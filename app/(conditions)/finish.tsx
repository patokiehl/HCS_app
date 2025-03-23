import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { getUser } from '@/utils/Database';
import { useUser } from '@/hooks/UserIDContexthook';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const FinishPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const { userId } = useUser();

  const fetchData = async () => {
    const data = await getUser(userId);
    if (data) {
      setUsers(data);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const openFile = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + 'userData.json';
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(users, null, 2));
      console.log('File written to:', fileUri);
    } catch (error) {
      console.error('Error storing file:', error);
    }
  };

  const shareFile = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + 'userData.json';
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        alert('Sharing is not available on this platform');
        return;
      }
      await Sharing.shareAsync(fileUri);
    } catch (error) {
      console.error('Error sharing file:', error);
    }
  };

  return (
    <ScrollView className="p-5">
      <Text className="text-2xl font-bold mb-5">Finish Page</Text>
      {users.map((row, index) => (
        <View key={index} className="my-2 p-3 border border-gray-300 rounded w-full">
          <Text>User ID: {row.Userid}</Text>
          <Text>Condition Order: {row.conditionOrder}</Text>
          <Text>Condition: {row.condition}</Text>
          <Text>Elapsed Time: {row.elapsedTime} ms</Text>
        </View>
      ))}
      <Button title="Store File" onPress={openFile} />
      <Button title="Share File" onPress={shareFile} />
    </ScrollView>
  );
};

export default FinishPage;
