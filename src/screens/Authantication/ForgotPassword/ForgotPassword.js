import React, { useMemo, useState } from 'react';
import { View, ScrollView, Appearance, ImageBackground, Text } from 'react-native';
import { Button, Input, Spacing } from '../../../components';
import { LoginStyle } from '../../../styles';
import { SH } from '../../../utils';
import { useTranslation } from "react-i18next";
import { darkTheme, lightTheme } from '../../../utils';
import images from '../../../index';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../../routes';
import { showMessage } from "react-native-flash-message";
import { useSelector } from 'react-redux';
const ForgotPassword = () => {
  const navigation = useNavigation();
  const colorScheme = Appearance.getColorScheme();
  // const Colors = colorScheme === 'dark' ? darkTheme : lightTheme;
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const LoginStyles = useMemo(() => LoginStyle(Colors), [Colors]);
  // const LoginStyles = LoginStyle;
  const [Email, setEmail] = useState('');
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const { t } = useTranslation();
  return (
    <View style={LoginStyles.MainContainer}>
      <ScrollView>
        <ImageBackground source={images.LoginShap} style={LoginStyles.Container}>
          <View >
            <View style={LoginStyles.TopView}>
              <Spacing space={60} />
              <Text style={LoginStyles.Welcome_back_Text}>{t("Forgot")}</Text>
              <Text style={LoginStyles.Password}>{t("Password")}</Text>
            </View>
            <Spacing space={210} />
            <View style={LoginStyles.PaddingHorizontal}>
              <Text style={LoginStyles.Forgot_pera_Text}>{t("Forgot_pera")}</Text>
            </View>
            <Spacing space={20} />
            <View style={LoginStyles.SetPadding}>
              <Input
                title={t("EMAIL ADDRESS")}
                placeholder={t("EMAIL ADDRESS")}
                onChangeText={(value) => setEmail(value)}
                value={Email}
                placeholderTextColor={Colors.gray_text_color}
              />
            </View>
            <Spacing space={SH(20)} />
            <View style={LoginStyles.PaddingHorizontal}>
              <Spacing space={SH(20)} />
              <Button onPress={() => {
                navigation.navigate(RouteName.LOGINFIRSTSCREEN), showMessage({
                  message: t("Successfully_forgot_your_password"),
                  type: "success",
                })
              }} buttonStyle={LoginStyles.ButtonView} title='SUBMIT' />
            </View>
          </View>
          <Spacing space={SH(100)} />
        </ImageBackground>
      </ScrollView>
    </View>
  );
};
export default ForgotPassword;