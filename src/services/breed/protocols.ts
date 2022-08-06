import {Breed} from '../../models';

export interface RequestGetBreedListParams {
  page: number;
  limit: number;
}

export interface ResponseGetBreedList {
  data: Breed[];
}
