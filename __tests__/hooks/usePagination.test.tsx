import {renderHook} from '@testing-library/react-native';

import {usePagination} from '../../src/hooks/usePagination';
import {useStorage} from '../../src/hooks/useStorage';

jest.mock('../../src/hooks/useStorage');

const useStorageMock = useStorage as jest.MockedFunction<typeof useStorage>;

describe('Hook: usePagination', () => {
  const getStoredValue = jest.fn();
  const setStoredValue = jest.fn();

  beforeAll(() => {
    useStorageMock.mockReturnValue({
      getStoredValue,
      setStoredValue,
    });
  });

  it('should initiate with page equal 0', async () => {
    const {result: sut} = renderHook(() =>
      usePagination({pageKey: 'page_key', lastItemKey: 'last_item_key'}),
    );

    expect(sut.current.page).toBe(0);
  });
});
