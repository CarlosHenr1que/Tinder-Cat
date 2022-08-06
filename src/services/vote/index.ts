import {Breed} from '../../models';
import api from '../api';
import {RequestSendVoteParams, ResponseGetBreedList} from './protocols';

export const requestSendVote = async ({
  image_id,
  sub_id,
  value,
}: RequestSendVoteParams): Promise<Breed[] | undefined> => {
  try {
    const response: ResponseGetBreedList = await api.post('votes', {
      image_id,
      sub_id,
      value,
    });

    return response.data;
  } catch (error) {
    throw new Error('could not create a vote');
  }
};
