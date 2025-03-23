import { Stack } from 'expo-router';
import { UserProvider } from '@/hooks/UserIDContexthook';
import { dropTable, initDatabase } from '@/utils/Database';
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    async function setupDB() {
      if (__DEV__) {
        await dropTable();
      }
      await initDatabase();
    }
    setupDB();
  }, []);

  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: true }} />
      </Stack>
    </UserProvider>
  );
}
