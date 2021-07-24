import * as fetchFunctions from './index';

beforeEach(() => {
  fetch.resetMocks();
});

test('api returns right result on success', async () => {
  fetch.mockResponseOnce(JSON.stringify('success'));
  const response = await fetchFunctions.postData();
  expect(response.response).toBe('success');
});

test('api returns error result on fail', async () => {
  fetch.mockReject(() => Promise.reject('Something went wrong'));
  const response = await fetchFunctions.postData();
  expect(response.error).toBe('Something went wrong');
});
