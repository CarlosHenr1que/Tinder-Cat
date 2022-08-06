import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = () => {
  const getStoredValue = async (id: string) => {
    const value = await AsyncStorage.getItem(id);
    return value;
  };

  const setStoredValue = async (id: string, value: any) => {
    await AsyncStorage.setItem(id, value);
  };

  return {getStoredValue, setStoredValue};
};
