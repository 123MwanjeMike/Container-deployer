export let controller;
let signal;

export const postData = async (url = '', data, authToken) => {
  controller = new AbortController();
  signal = controller.signal;
  try {
    let postObject;
    let fetchHeaders = {};

    postObject = JSON.stringify(data);
    fetchHeaders = {
      'Content-Type': 'application/json',
    };

    if (authToken) {
      fetchHeaders.Authorization = `Bearer ${authToken}`;
    }

    let response = await fetch(url, {
      method: 'POST',
      headers: { ...fetchHeaders },
      body: postObject,
      signal,
    });

    if (response.ok) {
      response = await response.json();
      return {
        response,
        success: true,
      };
    }
    response = await response?.json();
    return { error: response.err, success: false };
  } catch (err) {
    return {
      error: err,
      success: false,
    };
  }
};
