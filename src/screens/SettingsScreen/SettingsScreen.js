import React, { useMemo } from 'react';
import { View, Text } from "react-native";
import {  SettingsScreenStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import {  darkTheme, lightTheme } from '../../utils';
import { DarkLightTheme, Spacing, VectorIcon } from '../../components';
import { useSelector } from "react-redux";

const SettingsScreen = (props) => {
  const { t } = useTranslation();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const SettingsScreenStyles = useMemo(() => SettingsScreenStyle(Colors), [Colors]);

  return (
    <View style={SettingsScreenStyles.container}>
      
      <View>
      </View>
      <Spacing space={20} />
      <View style={SettingsScreenStyles.PaddingHorizontal}>
        <View style={SettingsScreenStyles.task}>
          <View style={SettingsScreenStyles.taskRow}>
            <VectorIcon icon="AntDesign" color={Colors.theme_background} name="notification" size={25} />
            <View style={SettingsScreenStyles.taskTitleView}>
              <Text style={SettingsScreenStyles.taskTitle}>{t("Notification_Setting")}</Text>
            </View>
          </View>
          <View style={SettingsScreenStyles.taskDetails}>
            <VectorIcon icon="AntDesign" color={Colors.theme_background} name="right" size={20} />
          </View>
        </View>
        <View style={SettingsScreenStyles.task}>
          <View style={SettingsScreenStyles.taskRow}>
            <VectorIcon icon="AntDesign" color={Colors.theme_background} name="lock1" size={25} />
            <View style={SettingsScreenStyles.taskTitleView}>
              <Text style={SettingsScreenStyles.taskTitle}>{t("Password_manager")}</Text>
            </View>
          </View>
          <View style={SettingsScreenStyles.taskDetails}>
            <VectorIcon icon="AntDesign" color={Colors.theme_background} name="right" size={20} />
          </View>
        </View>
        {/* <View style={SettingsScreenStyles.task}>
          <View style={SettingsScreenStyles.taskRow}>
            <VectorIcon icon="Entypo" color={Colors.theme_background} name="adjust" size={25} />
            <View style={SettingsScreenStyles.taskTitleView}>
              <Text style={SettingsScreenStyles.taskTitle}>{t("Mode")}</Text>
            </View>
          </View>
          <DarkLightTheme />
        </View> */}
        <View style={SettingsScreenStyles.task}>
          <View style={SettingsScreenStyles.taskRow}>
            <VectorIcon icon="AntDesign" color={Colors.theme_background} name="deleteuser" size={25} />
            <View style={SettingsScreenStyles.taskTitleView}>
              <Text style={SettingsScreenStyles.taskTitle}>{t("Delete_account")}</Text>
            </View>
          </View>
          <View style={SettingsScreenStyles.taskDetails}>
            <VectorIcon icon="AntDesign" color={Colors.theme_background} name="right" size={20} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default SettingsScreen;