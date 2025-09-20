import React, { useMemo, useState, } from 'react';
import { View, ScrollView, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Button, ConfirmationAlert, OTPInput, Spacing } from '../../../components';
import { LoginStyle } from '../../../styles';
import { SH } from '../../../utils';
import { useTranslation } from "react-i18next";
import { darkTheme, lightTheme } from '../../../utils';
import images from '../../../index';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../../routes';
import { useSelector } from 'react-redux';
const OtpVerifyScreen = () => {
    const navigation = useNavigation();
    const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
    const Colors = isDarkMode ? darkTheme : lightTheme;
    const LoginStyles = useMemo(() => LoginStyle(Colors), [Colors]);
    const { t } = useTranslation();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    var alertdata = {
        'logout': t("Resand_Otp_Text_Modal"),
        'loginSuccess': t("Login_Successfull"),
    }
    const onoknutton = () => {
        if (okbutton === false) okbutton;
        if (okbutton === true) navigation.navigate(RouteName.HOME_SCREEN)
    }
    return (
        <View style={LoginStyles.MainContainer}>
            <ScrollView style={LoginStyles.Container1}>
                <ImageBackground source={images.LoginShap} style={LoginStyles.Container}>
                    <View>
                        <View style={LoginStyles.TopView}>
                            <Spacing space={60} />
                            <Text style={LoginStyles.Welcome_back_Text}>{t("Verification")}</Text>
                            <Text style={LoginStyles.Log_in_Text}>{t("PIN")}</Text>
                        </View>
                        <Spacing space={200} />
                        <View style={LoginStyles.PaddingHorizontal}>
                            <Text style={LoginStyles.pin_Text}>{t("Enter_your_pin")}</Text>
                            <Spacing space={20} />
                            <OTPInput />
                            <Spacing space={20} />
                            <TouchableOpacity
                                onPress={() => {
                                    setAlertVisible(true);
                                    setAlertMessage(alertdata.logout);
                                    Setokbutton(false);
                                }}
                            >
                                <Text style={LoginStyles.pin_Text}>{t("Didn't recive OTP code!")}<Text style={LoginStyles.pin_Text_2}> {t("Resent")}</Text></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={LoginStyles.PaddingHorizontal}>
                            <Spacing space={SH(30)} />
                            <Button onPress={() => {
                                navigation.navigate(RouteName.OTPSUCCESSFULL)
                            }} buttonStyle={LoginStyles.ButtonView} title='VERIFY' />
                        </View>
                    </View>
                    <Spacing space={100} />
                </ImageBackground>
            </ScrollView>
            <ConfirmationAlert
                message={alertMessage}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                buttonminview={LoginStyles.buttonotp}
                iconVisible={true}
                buttonText={t("Ok")}
            />
        </View>
    );
};
export default OtpVerifyScreen;
