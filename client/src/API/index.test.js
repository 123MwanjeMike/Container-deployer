import * as fetchFunctions from './index';

beforeEach(() => {
  fetch.resetMocks();
});

test('Checks for the post data', async () => {
  fetch.mockResponseOnce(JSON.stringify('success'));
  const response = await fetchFunctions.postData()
  expect(response.error).toBe('Post data is required');
});

test('post returns right result on success', async () => {
  fetch.mockResponseOnce(JSON.stringify('success'));
  const response = await fetchFunctions.postData({
    imageURI: 'https://my.container.com',
  });
  expect(response.response).toBe('success');
});

test('post returns error result on fail', async () => {
  fetch.mockReject(() => Promise.reject('Something went wrong'));
  const response = await fetchFunctions.postData({
    imageURI: 'https://my.container.com',
  });
  expect(response.error).toBe('Something went wrong');
});
