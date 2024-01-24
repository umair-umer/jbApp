import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CheckoutScreen,
  CompanyProfileScreen,
  ForgetPassWord,
  ForumScreen,
  GetStarted,
  Jobdetail,
  JobsearchScreen,
  LoginScreen,
  NewpassScreen,
  NewsFeed,
  OtpScreen,
  RegLogButton,
  RegistertalentProfile,
  SeclectProfile,
  Traingcompanyprofile,
  TrainingScren,
  ViewPost,
  Pendingjobscreens,
  Applyjobscreen,
  Appliedjobscreen,
  Closejobscreen,
  Profilescreen,
  Messagesscreen,
  ChatRoom,
  Notificationscreen,
  Specialization,
  Searchingjob,
  Loctionsearching,
  Prefrencescreen,
  AddNewFeeds,
  Addnewfroums,
  OneVerfiyscreen,
  Verifyprocessscreen,
  CompanyOtpScreen,
  Codeverifiedscreen,
  Employetypescreen,
  Joblocationscreen,
  Salaryexpscreen,
  JobCategory,
  JobSeniority,
  Jobdescriptionscreen,
  CompanyLocationPhoto,
  CompanyPreView,
  Companymyjob,
  Companyapplicationstatus,
  Companyappliationpendingscreen,
  Companyshortlistedjob,
  Companyrejectedjob,
  Videocall,
  Myprofilesettingscreen,
  Purcahsecoursescreen,
  Mypaymentscreen,
  Letsaddyourcard,
  Addcardlistscreen,
  Verfymyprofilesettingscreen,
  Editprofileskillscreen,
  Editprofileexperiancescreen,
  ResumeGanratescreen,
  Genrateresumeform,
  Resumepreview,
  TalentSearch,
 
} from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
const { width, height } = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CusTomDrawer from './customesidebar';
import { useSelector, useDispatch } from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Nav() {

  // const token = useSelector(state => state.auth.token); 
  const { token, type } = useSelector((state) => state.auth);


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token ? (
          <Stack.Screen
            name="Main"
            component={() => (
              <Drawer.Navigator screenOptions={{ headerShown: false }}
                drawerContent={props => <CusTomDrawer {...props} />} >
                {type === "talent" ? (
                  <Stack.Screen name="home" component={MyDrawer} />
                ) : (

                  <Stack.Screen name="Companyhome" component={MyCompanyDrawer} />
                )}
              </Drawer.Navigator>
            )}
            options={{ headerShown: false }}
          />

        ) : (
       <>
            <Stack.Screen name="get" component={GetStarted} />
            <Stack.Screen name="logreg" component={RegLogButton} />
            <Stack.Screen name="loginscreen" component={LoginScreen} />
            <Stack.Screen name="seclectproscreen" component={SeclectProfile} />
            <Stack.Screen
              name="registrationscreen"
              component={RegistertalentProfile}
            />
            <Stack.Screen name="forgetpass" component={ForgetPassWord} />
            <Stack.Screen name="otpscreen" component={OtpScreen} />
            <Stack.Screen name="newpassscreen" component={NewpassScreen} />
            </>
        )}



        <Stack.Screen name="Vpost" component={ViewPost} />
        <Stack.Screen name="jobdeatilview" component={Jobdetail} />
        <Stack.Screen
          name="traingcompanyprofilescreen"
          component={Traingcompanyprofile}
        />
        <Stack.Screen name="checkout" component={CheckoutScreen} />
        <Stack.Screen name="applyjobform" component={Applyjobscreen} />
        <Stack.Screen name="pending" component={Pendingjobscreens} />
        <Stack.Screen name="appliedscreen" component={Appliedjobscreen} />
        <Stack.Screen name="closedscreen" component={Closejobscreen} />

        <Stack.Screen name="userprofilescreen" component={Profilescreen} />
        <Stack.Screen name="userprofilesetting" component={Myprofilesettingscreen} />
        <Stack.Screen name="Purchaseprofilescreen" component={Purcahsecoursescreen} />
        <Stack.Screen name="mypaymentscreen" component={Mypaymentscreen} />
        <Stack.Screen name="letpayment" component={Letsaddyourcard} />
        <Stack.Screen name="addcardlist" component={Addcardlistscreen} />
        <Stack.Screen name="myprofileverifyscreen" component={Verfymyprofilesettingscreen} />
        <Stack.Screen name="myprofileditskillsscreen" component={Editprofileskillscreen} />
        <Stack.Screen name="myprofileditexperiancescreen" component={Editprofileexperiancescreen} />

        <Stack.Screen name="userchatroomscreen" component={ChatRoom} />
        <Stack.Screen name="videocallscreen" component={Videocall} />

        <Stack.Screen name="notifyscreen" component={Notificationscreen} />

        <Stack.Screen name="specialscreen" component={Specialization} />
        <Stack.Screen name="seachingscreen" component={Searchingjob} />
        <Stack.Screen name="locationscreen" component={Loctionsearching} />
        <Stack.Screen name="prefscreen" component={Prefrencescreen} />
        <Stack.Screen name="addnewfeedscreen" component={AddNewFeeds} />
        <Stack.Screen name="addnewfroumscreen" component={Addnewfroums} />
        <Stack.Screen name="oneverfy" component={OneVerfiyscreen} />
        <Stack.Screen name="companyyprocessscreen" component={Verifyprocessscreen} />
        <Stack.Screen name="entercodeverified" component={CompanyOtpScreen} />
        <Stack.Screen name="codeverified" component={Codeverifiedscreen} />
        <Stack.Screen name="employtype" component={Employetypescreen} />
        <Stack.Screen name="joblocation" component={Joblocationscreen} />
        <Stack.Screen name="companysalary" component={Salaryexpscreen} />
        <Stack.Screen name="jobCategory" component={JobCategory} />
        <Stack.Screen name="jobseniority" component={JobSeniority} />
        <Stack.Screen name="jobdes" component={Jobdescriptionscreen} />
        <Stack.Screen name="locationphot" component={CompanyLocationPhoto} />
        <Stack.Screen name="preview" component={CompanyPreView} />
        <Stack.Screen name="jobview" component={Companymyjob} />
        <Stack.Screen name="statusview" component={Companyapplicationstatus} />
        <Stack.Screen name="pendingview" component={Companyappliationpendingscreen} />
        <Stack.Screen name="shortview" component={Companyshortlistedjob} />
        <Stack.Screen name="rejectedview" component={Companyrejectedjob} />

        <Stack.Screen name="resumegenratescreen" component={ResumeGanratescreen} />
        <Stack.Screen name="resumegenrateformscreen" component={Genrateresumeform} />
        <Stack.Screen name="resumepreviewscreen" component={Resumepreview} />











      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;

function Jobserandcompanyprofile() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide header for all screens
      }}>
      <Stack.Screen name="Jobapplicants" component={JobsearchScreen} />
      <Drawer.Screen name="companyprofile" component={CompanyProfileScreen} />
    </Stack.Navigator>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          flexDirection: 'column',
          bottom: 20,
          width: width * 0.95,
          height: height * 0.1,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: width * 0.07,
          paddingBottom: height * 0.03,
          paddingTop: height * 0.01,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          left: width * 0.025,
          borderColor: '#0DFFE8',
          borderWidth: 2,
        },
      }}
      tabBarOptions={{
        activeTintColor: '#0DFFE8',
        inactiveTintColor: 'white',
        showIcon: true,
      }}>
      <Tab.Screen
        name="Feeds"
        component={NewsFeed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Forums"
        component={ForumScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="users" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Job Search"
        component={Jobserandcompanyprofile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="briefcase" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Messagesscreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Training"
        component={TrainingScren}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="graduation-cap" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={props => <CusTomDrawer {...props} />
      }
    >
      <Drawer.Screen name="btab" component={BottomTab} />
    </Drawer.Navigator>
  );
}

function CompanyBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          flexDirection: 'column',
          bottom: 20,
          width: width * 0.95,
          height: height * 0.1,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: width * 0.07,
          paddingBottom: height * 0.03,
          paddingTop: height * 0.01,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          left: width * 0.025,
          borderColor: '#0DFFE8',
          borderWidth: 2,
        },
      }}
      tabBarOptions={{
        activeTintColor: '#0DFFE8',
        inactiveTintColor: 'white',
        showIcon: true,
      }}>
      <Tab.Screen
        name="Feeds"
        component={NewsFeed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Forums"
        component={ForumScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="users" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Talent search"
        component={TalentSearch}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="briefcase" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Messagesscreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Training"
        component={TrainingScren}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="graduation-cap" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyCompanyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={props => <CusTomDrawer {...props} />}
      initialRouteName="HomeTab">
      <Drawer.Screen name="companybtab" component={CompanyBottomTab} />
    </Drawer.Navigator>
  );
}
