import { useLocalSearchParams } from 'expo-router';

export function useOrder() {
  const { order } = useLocalSearchParams<{ order?: string }>();
  console.log('this is the order from index page', order);
  const formattedOrder = order ? parseInt(order, 10) : 1;
  return formattedOrder;
}
