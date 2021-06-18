import request from '../helpers/request';

test('request work', async () => {
  const originalFetch = global.fetch;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    })
  );

  expect(await request('test')).toEqual([]);
  expect(await request('test')).toHaveLength(0);

  global.fetch = originalFetch;
});

test('request throw error on !response.ok', async () => {
  const originalFetch = global.fetch;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: false,
      statusText: 'Server Error',
    })
  );

  try {
    await request('test');
  } catch (error) {
    expect(error.message).toEqual('Server Error');
  }

  global.fetch = originalFetch;
});
