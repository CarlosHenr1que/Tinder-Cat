import {Breed} from '../../models';
import api from '../api';
import {RequestGetBreedListParams, ResponseGetBreedList} from './protocols';

export const requestGetBreedList = async ({
  page,
  limit,
}: RequestGetBreedListParams): Promise<Breed[] | undefined> => {
  try {
    const response: ResponseGetBreedList = await api.get('breeds', {
      params: {
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('could not load breeds');
  }
};
