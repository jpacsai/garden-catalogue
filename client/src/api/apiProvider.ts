interface Request {
  endpoint: any;
  method?: string;
  body?: any;
  query?: any;
  headers?: any;
}

export const request = async ({ endpoint, method = 'GET', body, query, headers = {} }: Request) => {
  try {
    const result = await fetch(`/api/${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        // Authorization: getState().auth?.token,
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    return result.json();;
  } catch (err) {
    alert(err);
  }
};
