import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import "../global.css"
import Input from './components/input';
import Button from './components/button';
import { SingIn } from './pages/auth/signIn/SignIn';

export default function App() {


  return (
   <>
      <SingIn/>
   </>
  );
}

