import base64 from 'react-native-base64'
import { sha256 } from 'react-native-sha256'

export const generateCodeVerifier = () => {
  return generateRandomString(128)
}

export const generateRandomString = (length = 43) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export const generateCodeChallenge = async (code_verifier) => {
  try {
    return base64URL(await sha256(code_verifier))
  } catch(err) {
    console.error(err)
  }
}

export const base64URL = (string) => {
  return base64.encode(string)
}