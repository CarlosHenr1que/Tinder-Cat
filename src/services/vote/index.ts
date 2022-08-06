import api from '../api';
import {RequestSendVoteParams, ResponseSendVote} from './protocols';

export const requestSendVote = async ({
  image_id,
  sub_id,
  value,
}: RequestSendVoteParams): Promise<any | undefined> => {
  try {
    const response: ResponseSendVote = await api.post('votes', {
      image_id,
      sub_id,
      value,
    });

    return response.data;
  } catch (error) {
    throw new Error('could not create a vote');
  }
};
