import { Linking } from 'react-native'
import { SPF_AUTHORIZE_URI, SPF_CLIENT_ID } from './../../env'
import { generateCodeVerifier, generateCodeChallenge, generateRandomString } from '../utils/crypto'

export const spotifyAuth = async () => {
  try {
    const codeVerifier  = generateCodeVerifier()
    const codeChallenge = await generateCodeChallenge(codeVerifier)

    Linking.openURL(
      `${SPF_AUTHORIZE_URI}?response_type=code&client_id=${SPF_CLIENT_ID}&redirect_uri=alarmify%3A%2F%2Falarmify&scope=user-follow-modify&state=${generateRandomString(20)}&code_challenge=${codeChallenge}&code_challenge_method=S256`
    )
  } catch(err) {
    console.error(err)
  }
}