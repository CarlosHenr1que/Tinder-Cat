import {act, renderHook} from '@testing-library/react-native';

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

  it('should update page when nextPage is called', async () => {
    const {result: sut} = renderHook(() =>
      usePagination({pageKey: 'page_key', lastItemKey: 'last_item_key'}),
    );

    act(() => sut.current.nextPage());

    expect(sut.current.page).toBe(1);
  });

  it('should restore values when getLastStoredPagination is called', async () => {
    getStoredValue.mockReturnValueOnce('any_id');
    getStoredValue.mockReturnValueOnce('5');

    const {result: sut} = renderHook(() =>
      usePagination({pageKey: 'page_key', lastItemKey: 'last_item_key'}),
    );

    var lastStoredPagination: {
      lastItemID: string | null;
      lastPage: string | null;
    } = {lastItemID: null, lastPage: null};

    await act(async () => {
      lastStoredPagination = await sut.current.getLastStoredPagination();
    });

    expect(lastStoredPagination.lastItemID).toBe('any_id');
    expect(lastStoredPagination.lastPage).toBe('5');
  });

  it('should save last id when saveLastItemID is called', async () => {
    const {result: sut} = renderHook(() =>
      usePagination({pageKey: 'page_key', lastItemKey: 'last_item_key'}),
    );

    await act(async () => {
      await sut.current.saveLastItemID('breed_id');
    });

    expect(setStoredValue).toHaveBeenCalledWith('last_item_key', 'breed_id');
  });
});
