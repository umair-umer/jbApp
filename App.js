import React,{useEffect} from 'react'
import { View,Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Inputcomponent from './src/Components/Inputcomponent';
import Nav from './src/config/navigation';
import { getFcmToken, requestUserPermission } from './src/config/utilities/notification';
import messaging from '@react-native-firebase/messaging';
const App = () => {

  const checkInitialNotification = async () => {
    const initialNotification = await messaging().getInitialNotification();
    if (initialNotification) {
      console.log('Initial Notification:', initialNotification);
      handleNavigation(initialNotification.data);
    }
  };

  // Navigation handler based on notification data
  const handleNavigation = (data) => {
    if (data && data.screen && data.params) {
      // Assuming you have a navigation ref set up as per react-navigation documentation
      navigationRef.current?.navigate(data.screen, JSON.parse(data.params));
    }
  };
  useEffect(() => {
    SplashScreen.hide();
    requestUserPermission();
    getFcmToken();
    checkInitialNotification();
    
    // Foreground handler
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // Here you can update the state or show a modal based on 'remoteMessage'
    });

    // Background and quit state handler
    const unsubscribeOnNotificationOpenedApp = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification caused app to open from background state:', remoteMessage);
      handleNavigation(remoteMessage.data);
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
      // Handle data message
      // Note: This handler does not support showing UI elements or navigating.
    });
    return () => {
      setBackgroundMessageHandler();
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpenedApp();
    };

   
  }, [])
   // Function to handle initial notification

  return (
    <Nav/>
  )
}

export default App
