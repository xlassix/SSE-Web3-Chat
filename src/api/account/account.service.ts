import { account_json_db } from "../../model/account";

export const register = async (userName: string, publicAddress: string) => {
  try {
    // if user exist do nothing
    const data = account_json_db.getData(`/user-mapping/${userName}`);
    return { exist: true, data };
  } catch (error) {
    // if key dont exist add
    console.error(error);
    account_json_db.push(`/personal/${userName}`, { publicAddress });
    return { exist: false, data: { publicAddress } };
  }
};

export const get_auth_message = async (publicAddress: string) => {
  const message = `
    Welcome to CrypticConverse!

    By signing this message, I confirm that:
    1. I am the rightful owner of the Ethereum account associated with this signature.=
    2. I consent to use my Ethereum signature for identity verification on CrypticConverse.

    Date: ${Date()}
    Ethereum Address: ${publicAddress}

    Please sign this message to continue the registration and verify your Ethereum account.

    CrypticConverse
`;

  await account_json_db.push(`/auth_message/${publicAddress}`, { message });
  return { message };
};
