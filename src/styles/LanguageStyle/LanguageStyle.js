import { StyleSheet } from 'react-native';
import { SF, Fonts, SH, widthPercent, heightPercent, hexToRgba, Colors, SW } from '../../utils';

// export default StyleSheet.create({
  export default LanguageStyle = (Colors) => StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white_text_color,
  },
  MainPadding: {
    paddingHorizontal: SW(20)
  },
  LanguageMainBoxView: {
    alignItems: 'center',
    width: '50%',
  },
  MainBoxView: {
    alignItems: 'center',
    width: '33.33%',
  },
  BoxView: {
    paddingHorizontal: SW(5),
    paddingVertical: SH(20),
    backgroundColor: Colors.white_text_color,
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: SH(10),
    alignItems: 'center',
    width: '90%',
    marginVertical: '5%',
  },
  text: {
    fontSize: SF(15),
    color: Colors.black_text_color,
    textAlign: 'center',
    fontFamily: Fonts.Fonts_Medium
  },
  ActiveBgColor: {
    backgroundColor: Colors.theme_background
  },
  ActiveColor: {
    color: Colors.white_color
  },
  TopView:{
    paddingHorizontal:SH(20)
},
Welcome_back_Text:{
    fontSize:SF(30),
    fontFamily:Fonts.Poppins_Bold,
    color:"white"
},
Password:{
    fontSize:SF(40),
    fontFamily:Fonts.Poppins_Bold,
    color:"white"
},
});