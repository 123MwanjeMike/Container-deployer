export const postData = async (url = '', data) => {
  const controller = new AbortController();
  const signal = controller.signal;
  try {
    const postObject = JSON.stringify(data);
    const fetchHeaders = {
      'Content-Type': 'application/json',
    };

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
