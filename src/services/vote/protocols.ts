import {Breed} from '../../models';

export interface RequestSendVoteParams {
  image_id: string;
  sub_id: string;
  value: 1 | 0;
}

export interface ResponseGetBreedList {
  data: Breed[];
}
