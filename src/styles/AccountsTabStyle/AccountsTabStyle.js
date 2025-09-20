import { StyleSheet } from 'react-native';
import { SF, Fonts, SH, widthPercent, heightPercent, hexToRgba, Colors } from '../../utils';

export default AccountsTabStyle = (Colors) => StyleSheet.create({
  // export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white_text_color,
    },
    profileSection: {
      alignItems: 'center',
      padding: SH(20),
    },
    profileImage: {
      width: SH(120),
      height: SH(120),
      borderRadius: SH(100),
    },
    profileName: {
      fontSize: SF(23),
      fontFamily: Fonts.Poppins_Bold,
      color: Colors.black_text_color,
      fontWeight: 'bold',
    },
    profileRole: {
      fontSize: SF(15),
      fontFamily: Fonts.Poppins_Medium,
      color: Colors.gray_text_color,
    },
    iconRow: {
      flexDirection: 'row',
    },
    iconButton: {
      backgroundColor: "#ddddf0",
      borderRadius: SH(25),
      padding: SH(10),
      marginHorizontal: SH(10),
    },
    infoSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: SH(20),
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
    },
    infoTitle: {
      fontSize: SF(23),
      fontFamily: Fonts.Poppins_Bold,
      color: Colors.black_text_color,
      fontWeight: 'bold',
    },
    calendarSection: {
      flex: 1,
      paddingHorizontal: SH(20),
  
    },
    calendar: {
      borderWidth: 1,
      borderColor: '#e0e0e0',
      borderRadius: 10,
    },
   
});