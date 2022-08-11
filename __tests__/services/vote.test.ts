import {requestSendVote} from '../../src/services/vote';

import {server} from '../../test/server/server';
import {rest} from 'msw';

import URL from '../../test/mocks/url';

describe('Vote Service', () => {
  it('should post a vote', async () => {
    const data = await requestSendVote({
      image_id: 'any_id',
      sub_id: 'any_sub_id',
      value: 1,
    });

    expect(data.message).toBe('SUCCESS');
  });

  it('should throw a error when response is not 201', async () => {
    server.use(
      rest.post(URL.VOTES, (req, res, ctx) => {
        return res.once(ctx.status(400));
      }),
    );

    const data = requestSendVote({
      image_id: 'any_id',
      sub_id: 'any_sub_id',
      value: 1,
    });

    await expect(data).rejects.toThrow(new Error('could not create a vote'));
  });
});
