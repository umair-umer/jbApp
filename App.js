import React,{useEffect} from 'react'
import { View,Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Inputcomponent from './src/Components/Inputcomponent';
import Nav from './src/config/navigation';
import { requestUserPermission } from './src/config/utilities/notification';

const App = () => {
  useEffect(() => {
    requestUserPermission()

    SplashScreen.hide();
  }, [])
  return (
    <Nav/>
  )
}

export default App
