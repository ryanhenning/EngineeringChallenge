import Constants from 'expo-constants';

export let apiRoot: string = 'https://fancy-dolphin-65b07b.netlify.app/api';

if (__DEV__) {
  const localIp = Constants?.expoConfig?.hostUri
    ? Constants.expoConfig.hostUri.split(`:`).shift()
    : `localhost`;
  apiRoot = `http://${localIp}:3001`;
}
