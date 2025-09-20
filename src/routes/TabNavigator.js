import React, { useMemo } from 'react';
import { View, Appearance } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fonts, SF, SH, SW, darkTheme, lightTheme } from '../utils';
import {  Style } from '../styles';
import Translation from '../Language/i18n';
import { ContactsTab, DealsTab, HomeTab, LeadTab } from '../screens';
import RouteName from './RouteName';
import {  DarkLightTheme, HeaderLeftMenuIcon, VectorIcon } from '../components';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const HeaderArray = {
  headerShown: true,
  headerShadowVisible: false,
};
export default function TabNavigator(props) {
  const navigation = useNavigation();
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;

  const Styles = useMemo(() => Style(Colors), [Colors]);
  return (
    <Tab.Navigator
      initialRouteName={RouteName.HOME_SCREEN}
      screenOptions={({ route }) => ({
        tabBarStyle: { ...Styles.tabContainer },
      })}
    >
      <Tab.Screen name={RouteName.HOME_SCREEN} component={HomeTab}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: SW(15),
          },
          headerRightContainerStyle: {
            paddingRight: SW(20),
          },
          tabBarShowLabel: false,
          title: Translation('Home'),
          headerTitleStyle: {
            fontFamily: Fonts.Fonts_Medium,
            color: Colors.white_color
          },
          tabBarIcon: ({ focused }) => (
            <View style={Styles.buttonWholeContainer}>
              {focused ? (
                <View style={Styles.buttonContainer}>
                  <VectorIcon
                    color={Colors.theme_background}
                    name="home"
                    icon="Entypo"
                    size={SF(20)}
                    style={Styles.buttonImage}
                  />
                </View>
              ) : (
                <View style={Styles.buttonContainer}>
                  <VectorIcon
                    style={Styles.buttonImage}
                    color={Colors.black_text_color}
                    name="home"
                    icon="AntDesign"
                    size={SF(20)}
                  />
                </View>
              )}
            </View>
          ),
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerTitleStyle: {
            color: Colors.white_color
          },
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <View style={{marginRight:SH(0)}}>
              <DarkLightTheme/>
            </View>

          ),
        }}
      />
      <Tab.Screen name={RouteName.LEADTAB} component={LeadTab}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: SW(15),
          },
          tabBarShowLabel: false,
          title: Translation("Lead"),
          headerTitleStyle: {
            fontFamily: Fonts.Fonts_Medium,
            color: Colors.white_color
          },
          tabBarIcon: ({ focused }) => (
            <View style={Styles.buttonWholeContainer}>
              {focused ? (
                <View style={Styles.buttonContainer}>
                  <VectorIcon
                    color={Colors.theme_background}
                    name="users"
                    icon="FontAwesome"
                    size={SF(20)}
                    style={Styles.buttonImage}
                  />
                </View>
              ) : (
                <View style={Styles.buttonContainer}>
                  <VectorIcon
                    style={Styles.buttonImage}
                    color={Colors.black_text_color}
                    name="team"
                    icon="AntDesign"
                    size={SF(20)}
                  />
                </View>
              )}
            </View>
          ),
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerTitleStyle: {
            color: Colors.white_color
          }
        }}
      />
      <Tab.Screen name={RouteName.DEALSTAB} component={DealsTab}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: SW(15),
          },
          tabBarShowLabel: false,
          title: Translation("Deals"),
          headerTitleStyle: {
            fontFamily: Fonts.Fonts_Medium,
            color: Colors.white_color
          },
          tabBarIcon: ({ focused }) => (
            <View style={Styles.buttonWholeContainer}>
              {focused ? (
                <View style={Styles.buttonContainer}>
                  <VectorIcon
                    color={Colors.theme_background}
                    name="hands-helping"
                    icon="FontAwesome5"
                    size={SF(19)}
                    style={Styles.buttonImage}
                  />
                </View>
              ) : (
                <View style={Styles.buttonContainer}>
                  <VectorIcon
                    style={Styles.buttonImage}
                    color={Colors.black_text_color}
                    name="handshake-o"
                    icon="FontAwesome"
                    size={SF(19)}
                  />
                </View>
              )}
            </View>
          ),
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerTitleStyle: {
            color: Colors.white_color
          },
        }}
      />
      <Tab.Screen name={RouteName.CONTACTSTAB} component={ContactsTab}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: SW(15),
          },
          tabBarShowLabel: false,
          title: Translation("Contacts"),
          headerTitleStyle: {
            fontFamily: Fonts.Fonts_Medium,
            color: Colors.white_color
          },
          tabBarIcon: ({ focused }) => (
            <View style={Styles.buttonWholeContainer}>
              {focused ? (
                <View style={Styles.buttonContainer}>
                  <VectorIcon
                    color={Colors.theme_background}
                    name="phone"
                    icon="FontAwesome"
                    size={SF(20)}
                    style={Styles.buttonImage}
                  />
                </View>
              ) : (
                <View style={Styles.buttonContainer}>
                  <VectorIcon
                    style={Styles.buttonImage}
                    color={Colors.black_text_color}
                    name="phone"
                    icon="Feather"
                    size={SF(20)}
                  />
                </View>
              )}
            </View>
          ),
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerTitleStyle: {
            color: Colors.white_color
          },
        }}
      />
    </Tab.Navigator>
  )
}



