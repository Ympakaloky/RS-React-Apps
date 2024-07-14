import fetchData from '../services/fetchData';

describe('fetchData function', () => {
  test('fetches data successfully from POKEAPI', async () => {
    const fakeUrl = 'https://pokeapi.co/api/v2/pokemon/';

    try {
      const result = await fetchData(fakeUrl);

      expect(result).toBeTruthy();
      expect(result).toHaveProperty('length');
      expect(result[0]).toHaveProperty('name');
      expect(result[0]).toHaveProperty('url');
    } catch (error) {
      fail(`fetchData failed with error: ${error}`);
    }
  });

  test('fetches data successfully from non-POKEAPI URL', async () => {
    const fakeUrl = 'https://example.com/api/data';

    try {
      const result = await fetchData(fakeUrl);
      expect(result).toBeTruthy();
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(1);
      expect(result[0]).toHaveProperty('name');
      expect(result[0]).toHaveProperty('url');
    } catch (error) {
      fail(`fetchData failed with error: ${error}`);
    }
  });

  test('handles errors gracefully', async () => {
    const fakeUrl = 'https://example.com/nonexistent';

    try {
      const result = await fetchData(fakeUrl);
      expect(result).toEqual([{ name: 'Not Found', url: 'Not Found' }]);
    } catch (error) {
      fail(`fetchData failed with error: ${error}`);
    }
  });
});
