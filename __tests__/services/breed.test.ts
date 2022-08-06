import {requestGetBreedList} from '../../src/services/breed';
import {breeds} from '../mocks/breeds';

describe('Breed Service', () => {
  it('should get breed list', async () => {
    const data = await requestGetBreedList({page: 0, limit: 1});

    expect(data).toHaveLength(1);
    expect(data?.[0]).toEqual(breeds[0]);
  });
});
