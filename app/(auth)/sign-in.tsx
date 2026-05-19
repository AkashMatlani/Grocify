import { AuthView } from '@clerk/expo/native';
import useSocailAuth from '../hooks/useSoiaclAuth';

export default function SignInScreen() {

  const { handleSocialAuth, loadingStartegy } = useSocailAuth();
  return <AuthView mode="signInOrUp" />
}