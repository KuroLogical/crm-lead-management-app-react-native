import React, { useState, useMemo } from 'react';
import { View, ScrollView, TouchableOpacity,  ImageBackground, Text } from 'react-native';
import { Button, Input, Spacing } from '../../../components';
import {  LoginStyle } from '../../../styles';
import { SH } from '../../../utils';
import { useTranslation } from "react-i18next";
import { darkTheme, lightTheme } from '../../../utils';
import images from '../../../index';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../../routes';
import { useSelector } from 'react-redux';
const LoginScreen = () => {
    const navigation = useNavigation();
    const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
    const Colors = isDarkMode ? darkTheme : lightTheme;
    const LoginStyles = useMemo(() => LoginStyle(Colors), [Colors]);
    const [Email, setEmail] = useState('');
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const [TextInputPassword, setTextInputPassword] = useState('');
    const onChangeText = (text) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
    };
    const { t } = useTranslation();
    return (
        <View style={LoginStyles.MainContainer}>
        <ScrollView>
            <ImageBackground source={images.LoginShap} style={LoginStyles.Container}>
                <View>
                    <View style={LoginStyles.TopView}>
                        <Spacing space={60} />
                        <Text style={LoginStyles.Welcome_back_Text}>{t("Welcome_back")}</Text>
                        <Text style={LoginStyles.Log_in_Text}>{t("Log_in")}</Text>
                    </View>
                    <Spacing space={210} />
                    <View style={LoginStyles.SetPadding}>
                        <Input
                            title={t("EMAIL ADDRESS")}
                            placeholder={t("EMAIL ADDRESS")}
                            onChangeText={(value) => setEmail(value)}
                            value={Email}
                            placeholderTextColor={Colors.gray_text_color}
                        />
                        <Spacing space={SH(20)} />
                        <Input
                            title={t("PASSWORD")}
                            placeholder={t("PASSWORD")}
                            onChangeText={(TextInputPassword) => setTextInputPassword(TextInputPassword)}
                            value={TextInputPassword}
                            secureTextEntry={true}
                            placeholderTextColor={Colors.gray_text_color}
                        />
                    </View>
                    <Spacing space={SH(30)} />
                    <View style={LoginStyles.PaddingHorizontal}>
                        <View style={LoginStyles.FlexRow}>
                            <View>
                                <Text style={LoginStyles.Forgot_password}>{t("")}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.FORGOT_PASSWORD)}>
                                <Text style={LoginStyles.Forgot_password}>{t("Forgot_password")}</Text>
                            </TouchableOpacity>
                        </View>
                        <Spacing space={SH(20)} />
                        <Button onPress={() => navigation.navigate(RouteName.OTP_VERYFY_SCREEN)} buttonStyle={LoginStyles.ButtonView} title='LOGIN' />
                    </View>
                </View>
                {/* <Spacing space={80} /> */}
            </ImageBackground>
        </ScrollView>
        </View>
    );
};
export default LoginScreen;