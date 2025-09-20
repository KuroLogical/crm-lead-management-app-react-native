import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { darkTheme, Fonts, lightTheme } from '../utils';
import { RouteName, SideNavigator } from '../routes';
import { AccountsScreen, AddCall, AddLeads, AddMeeting, AddTask, Call, ForgotPassword, LanguageScreen, LocationScreen, LoginFirstScreen, LoginScreen, MeetingScreen, NotificationScreen, OtpSuccessful, OtpVeryfiveScreen, PrivacyPolicyScreen, RegisterScreen, RegistrationSuccessful, ReviewsScreen, SettingsScreen, SplashScreen, Swiperscreen, TasksScreen } from '../screens';
import FlashMessage from "react-native-flash-message";
import { useSelector } from 'react-redux';
import Translation from '../Language/i18n';
const RootNavigator = props => {
  const Stack = createStackNavigator();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const headerthemeArrow = {
    headerShown: true,
    title: "",
    headerTintColor: Colors.white_color,
    headerTitleStyle: {
      fontFamily: Fonts.Fonts_Medium,
      color: Colors.white_color
    },
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: Colors.theme_background
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RouteName.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        <Stack.Screen name={RouteName.LOGINFIRSTSCREEN} component={LoginFirstScreen} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RouteName.REGISTER_SCREEN} component={RegisterScreen} />
        <Stack.Screen name={RouteName.FORGOT_PASSWORD} component={ForgotPassword} />
        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVeryfiveScreen} />
        <Stack.Screen name={RouteName.HOME_SCREEN} component={SideNavigator} />
        <Stack.Screen name={RouteName.LANGUAGESCREEN} component={LanguageScreen} />
        <Stack.Screen name={RouteName.ADDMEETING} options=
          {{
            ...headerthemeArrow,
            title: Translation('Add_meeting'),
            headerTitleAlign: 'center'
          }} component={AddMeeting} />
        <Stack.Screen name={RouteName.CALL} options=
          {{
            ...headerthemeArrow,
            title: Translation('Calls'),
            headerTitleAlign: 'center'
          }} component={Call} />
        <Stack.Screen name={RouteName.ADDTASK} options=
          {{
            ...headerthemeArrow,
            title: Translation('Add_task'),
            headerTitleAlign: 'center'
          }} component={AddTask} />
        <Stack.Screen name={RouteName.ADDCALL} options=
          {{
            ...headerthemeArrow,
            title: Translation('Add_call'),
            headerTitleAlign: 'center'
          }} component={AddCall} />
        <Stack.Screen name={RouteName.ADDLEADS} options=
          {{
            ...headerthemeArrow,
            title: Translation('Add_lead'),
            headerTitleAlign: 'center'
          }}
          component={AddLeads} />
        <Stack.Screen name={RouteName.ACCOUNTSSCREEN} options=
          {{
            ...headerthemeArrow,
            title: Translation('Costomer_information'),
            headerTitleAlign: 'center'
          }}
          component={AccountsScreen} />
        <Stack.Screen name={RouteName.MEEETINGSCREEN} options=
          {{
            ...headerthemeArrow,
            title: Translation('Meetings'),
            headerTitleAlign: 'center'
          }}
          component={MeetingScreen} />
        <Stack.Screen name={RouteName.TASKSSCREEN} options=
          {{
            ...headerthemeArrow,
            title: Translation('Tasks'),
            headerTitleAlign: 'center'
          }}
          component={TasksScreen} />
        <Stack.Screen name={RouteName.SETTING_SCREEN} options=
          {{
            ...headerthemeArrow,
            title: Translation('Settings'),
            headerTitleAlign: 'center'
          }} component={SettingsScreen} />
        <Stack.Screen name={RouteName.NOTIFICTION_SCREEN} options=
          {{
            ...headerthemeArrow,
            title: Translation('Nottification'),
            headerTitleAlign: 'center'
          }} component={NotificationScreen} />
        <Stack.Screen name={RouteName.REVIEWS_SCREEN} options=
          {{
            ...headerthemeArrow,
            title: Translation('Reviews'),
            headerTitleAlign: 'center'
          }} component={ReviewsScreen} />
        <Stack.Screen name={RouteName.PRIVACY_POLICY_SCREEN} options=
          {{
            ...headerthemeArrow,
            title: Translation('Reviews'),
            headerTitleAlign: 'center'
          }} component={PrivacyPolicyScreen} />

        <Stack.Screen name={RouteName.REGISTRATIONSUCCESSFUL} component={RegistrationSuccessful} />
        <Stack.Screen name={RouteName.OTPSUCCESSFULL} component={OtpSuccessful} />

      </Stack.Navigator>

      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
export default RootNavigator;