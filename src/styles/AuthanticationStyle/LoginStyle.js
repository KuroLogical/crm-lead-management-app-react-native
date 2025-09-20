import { StyleSheet } from 'react-native';
import { Colors, Fonts, SF, SH, SW } from '../../utils';

export default LoginStyle = (Colors) => StyleSheet.create({
    // export default StyleSheet.create({
    BgColorWhiteAllHome: {
        backgroundColor: Colors.theme_background,
        flex: 1
    },
    MainContainer:{
        flex:1,
        backgroundColor: Colors.white_text_color,
    },
    MinViewScreen: {
        backgroundColor: Colors.white_text_color,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Container1: {
        width: '100%',
        height: '100%',
    },
    Container: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.white_text_color
    },
    TopView: {
        paddingHorizontal: SH(20)
    },
    Welcome_back_Text: {
        fontSize: SF(25),
        fontFamily: Fonts.Poppins_Bold,
        color: "white"
    },
    Log_in_Text: {
        fontSize: SF(55),
        fontFamily: Fonts.Poppins_Bold,
        color: "white",
    },
    Password: {
        fontSize: SF(45),
        fontFamily: Fonts.Poppins_Bold,
        color: "white",
    },
    SetPadding: {
        paddingHorizontal: SH(5)
    },
    PaddingHorizontal: {
        paddingHorizontal: SH(20)
    },
    ButtonView: {
        borderRadius: SH(70)
    },
    FlexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Forgot_password: {
        fontSize: SF(14),
        fontFamily: Fonts.Poppins_Italic,
        color: Colors.black_text_color
    },
    pin_Text: {
        width: '100%',
        textAlign: 'center',
        fontSize: SF(17),
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color
    },
    pin_Text_2: {
        fontSize: SF(17),
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.theme_background
    },
    Forgot_pera_Text: {
        fontSize: SF(14),
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray_text_color
    },





    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white_text_color,
        paddingHorizontal: SH(20)
    },
    logo: {
        width: SH(180),
        height: SH(180),
        marginBottom: SH(0),
    },
    title: {
        fontSize: SF(35),
        fontWeight: 'bold',
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.theme_background
    },

    signUpText: {
        fontSize: SF(25),
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.black_text_color
    },
    description: {
        fontSize: SF(16),
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray_text_color
    },
    facebookButton: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.theme_background,
        paddingVertical: SH(10),
        paddingHorizontal: SH(50),
        borderRadius: 25,
    },
    facebookButtonText: {
        color: Colors.white_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        marginLeft: 10,
    },
    emailButton: {
        borderWidth: 1,
        borderColor: Colors.gray_text_color,
        paddingVertical: SH(10),
        paddingHorizontal: SH(30),
        borderRadius: SH(30),
    },
    emailButtonText: {
        color: Colors.gray_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    icon: {
        marginHorizontal: SH(10),
    },
    loginText: {
        color: Colors.gray_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
    },
    loginLink: {
        color: Colors.theme_background,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
    },
    CheckImg: {
        width: SH(150),
        height: SH(150)
    },
    resignationsuccessfullyText:{
        fontFamily:Fonts.Poppins_Medium,
        color:Colors.black_text_color,
        fontSize:SF(22)
    },
    AccountButton:{
        width:'100%',
        paddingHorizontal:SH(20)
    }
});