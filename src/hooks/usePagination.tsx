import {useState} from 'react';
import {useStorage} from './useStorage';

interface Props {
  pageKey: string;
  lastItemKey: string;
}

export const usePagination = (props: Props) => {
  const {pageKey, lastItemKey} = props;
  const [page, setPage] = useState<number>(0);
  const {getStoredValue, setStoredValue} = useStorage();

  const getLastStoredPagination = async () => {
    const lastItemID = await getStoredValue(lastItemKey);
    const lastPage = await getStoredValue(pageKey);
    setPage(Number(lastPage));
    return {
      lastItemID,
      lastPage,
    };
  };

  const nextPage = () => {
    setPage(previousPage => {
      const nextPageState = previousPage + 1;
      setStoredValue(pageKey, nextPageState.toString());
      return nextPageState;
    });
  };

  const saveLastItemID = (id: string) => {
    setStoredValue(lastItemKey, id);
  };

  return {page, nextPage, getLastStoredPagination, saveLastItemID};
};
