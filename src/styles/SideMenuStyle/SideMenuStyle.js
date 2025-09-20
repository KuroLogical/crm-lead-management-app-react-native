import { StyleSheet } from 'react-native';
import { Fonts, SH, SW, SF } from '../../utils';

export default Sidemenu = (Colors) => StyleSheet.create({
  customslidebarmenu: {
    paddingHorizontal: SH(20),
    paddingTop: SH(10),
    backgroundColor:Colors.white_text_color
  },
  hometextstyle: {
    color: Colors.black_text_color,
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    paddingLeft: SH(20),
  },
  flexrowset: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.light_gray_text_color,
    borderBottomWidth: SH(0),
    paddingVertical: SH(10),
  },
  settingandlogout: {
    paddingTop: SH(40),
  },
  logoimage: {
    width: SW(20),
    height: SH(20),
  },
  SetWidth: {
    width: SW(20)
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.notification_color,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 8,
    color: Colors.black_text_color
  },
  bodyText: {
    fontSize: SF(14),
    marginBottom: 8,
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.gray_text_color
  },
  VectorIcon:{
    width:SH(30)
  }
});