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
const RegisterScreen = () => {
    const navigation = useNavigation();
    const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
    const Colors = isDarkMode ? darkTheme : lightTheme;
    const LoginStyles = useMemo(() => LoginStyle(Colors), [Colors]);
    const [UserName, setUserName] = useState('');
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
                            <Text style={LoginStyles.Welcome_back_Text}>{t("Hello")}</Text>
                            <Text style={LoginStyles.Log_in_Text}>{t("Sign_Up")}</Text>
                        </View>
                        <Spacing space={150} />
                        <View style={LoginStyles.SetPadding}>
                            <Input
                                title={t("USER NAME")}
                                placeholder={t("USER NAME")}
                                onChangeText={(value) => setUserName(value)}
                                value={UserName}
                                placeholderTextColor={Colors.gray_text_color}
                            />
                            <Spacing space={SH(20)} />
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
                        <View style={LoginStyles.PaddingHorizontal}>
                            <Spacing space={SH(30)} />
                            <Button onPress={() => {
                                navigation.navigate(RouteName.REGISTRATIONSUCCESSFUL)
                            }} buttonStyle={LoginStyles.ButtonView} title='SIGNUP' />
                        </View>
                    </View>
                    <Spacing space={40} />
                </ImageBackground>
            </ScrollView>
        </View>
    );
};
export default RegisterScreen;