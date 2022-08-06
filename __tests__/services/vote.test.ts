import {requestSendVote} from '../../src/services/vote';

describe('Vote Service', () => {
  it('should post a vote', async () => {
    const data = await requestSendVote({
      image_id: 'any_id',
      sub_id: 'any_sub_id',
      value: 1,
    });

    expect(data.message).toBe('SUCCESS');
  });
});
