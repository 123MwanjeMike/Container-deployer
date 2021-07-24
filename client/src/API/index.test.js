import * as fetchFunctions from './index';

beforeEach(() => {
  fetch.resetMocks();
});

test('api returns right result', async () => {
  fetch.mockResponseOnce(JSON.stringify({ message: 'success' }));
  const request = await fetchFunctions.postData();
  expect(request.response.message).toBe('success');
});
