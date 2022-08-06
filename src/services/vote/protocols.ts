export interface RequestSendVoteParams {
  image_id: string;
  sub_id: string;
  value: 1 | 0;
}

export interface ResponseSendVote {
  data: {
    message: string;
  };
}
