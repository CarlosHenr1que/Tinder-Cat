import {requestGetBreedList} from '../../src/services/breed';
import {breeds} from '../../test/mocks/breeds';

import {server} from '../../test/server/server';
import {rest} from 'msw';
import URL from '../../test/mocks/url';

describe('Breed Service', () => {
  it('should get breed list', async () => {
    const data = await requestGetBreedList({page: 0, limit: 1});

    expect(data).toHaveLength(1);
    expect(data?.[0]).toEqual(breeds[0]);
  });

  it('should throw a error when response is not 200', async () => {
    server.use(
      rest.get(URL.BREEDS, (req, res, ctx) => {
        return res.once(ctx.status(400));
      }),
    );

    const data = requestGetBreedList({page: 0, limit: 1});

    await expect(data).rejects.toThrow(new Error('could not load breeds'));
  });
});
