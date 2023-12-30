import { get_auth_message } from '../account.service';

describe('account service:', () => {
  test('get_auth_message', async () => {
    const { message } = await get_auth_message(
      '0x0000000000000000000000000000000000000000'
    );
    expect(typeof message).toBe('string');
  });
});
