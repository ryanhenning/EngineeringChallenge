import { router } from 'expo-router';
import { Text, View, TextInput, Alert } from 'react-native';

import { useSession } from '../components/AuthContext';
import { useState } from 'react';
import { styles } from '../components/EditScreenInfo';

export default function SignIn() {
  const { signIn, session } = useSession();
  const [userName, setUserName] = useState<string>();
  const [signInError, setSignInError] = useState<boolean>(false);

  const handleSignIn = async () => {
    try {
      await signIn(userName);

      !!session && router.replace('/');
    } catch {
      setSignInError(true);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ ...styles.input, width: '75%' }}
        onChangeText={(text) => setUserName(text)}
        value={userName}
        placeholder="Enter username"
      />

      <Text onPress={handleSignIn}>Sign In</Text>

      {signInError && (
        <Text style={{ color: '#FF0000' }}>Invalid Username!</Text>
      )}
    </View>
  );
}
