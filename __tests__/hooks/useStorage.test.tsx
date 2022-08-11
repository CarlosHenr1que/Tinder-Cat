import AsyncStorage from '@react-native-async-storage/async-storage';

import {renderHook} from '@testing-library/react-native';
import {useStorage} from '../../src/hooks/useStorage';

const StorageMock = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

describe('Hook: useStorage', () => {
  it('should store a value with async storage', async () => {
    const {result} = renderHook(() => useStorage());
    const id = 'any_id';
    const value = 'any_value';

    await result.current.setStoredValue(id, value);

    expect(StorageMock.setItem).toHaveBeenCalledWith(id, value);
  });

  it('should get a stored value with async storage', async () => {
    const {result} = renderHook(() => useStorage());
    const id = 'any_id';
    const value = 'any_value';

    StorageMock.getItem.mockImplementationOnce(() => Promise.resolve(value));
    const recoveredValue = await result.current.getStoredValue(id);

    expect(recoveredValue).toBe(value);
  });
});
