import { StyleSheet } from 'react-native';
import { SF, Fonts, SH} from '../../utils';

export default CallStyle = (Colors) => StyleSheet.create({
  // export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white_text_color
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap:SH(20),
      backgroundColor: Colors.white_text_color,
      paddingHorizontal: SH(20)
    },
    PaddingHorizontal: {
      paddingHorizontal: SH(20),
      backgroundColor:Colors.white_text_color
    },
    tabView: {
      borderWidth: SH(1),
      paddingHorizontal: SH(20),
      borderRadius: SH(100),
      paddingVertical: SH(2),
      borderColor: Colors.gray_text_color
    },
    activeTabView: {
      borderWidth: SH(1),
      paddingHorizontal: SH(20),
      borderRadius: SH(100),
      paddingVertical: SH(2),
      borderColor: Colors.theme_background,
       backgroundColor:"#f7f7fc"
    },
    PipelineBorder:{
      borderWidth: SH(0),
      paddingHorizontal: SH(20),
      borderRadius: SH(100),
      paddingVertical: SH(2),
      borderColor: Colors.gray_text_color,
      backgroundColor:"#f7f7fc"
    },
    tab: {
      fontSize: SF(15),
      color: Colors.gray_text_color,
      fontFamily: Fonts.Poppins_Medium
    },
    activeTab: {
      fontSize: SF(15),
      color: Colors.theme_background,
      fontFamily: Fonts.Poppins_Medium
    },
    card: {
      width: '100%',
      backgroundColor: Colors.white_text_color,
      padding: SH(10),
      borderRadius: SH(10),
      borderWidth: 0,
      elevation: 2,
      marginBottom: SH(20),
      elevation: 2,
      shadowColor: Colors.black_text_color,
      shadowOffset: { width: 0, height: 4 }, 
      shadowOpacity: 0.2, 
      shadowRadius: 8, 
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profilePic: {
      width: SH(50),
      height: SH(50),
      borderRadius: SH(25),
    },
    cardText: {
      flex: 1,
      marginLeft: SH(20),
    },
    name: {
      fontSize: SF(18),
      fontFamily: Fonts.Poppins_Bold,
      color: Colors.black_text_color,
      fontWeight: 'bold',
    },
    company: {
      fontSize: SF(14),
      fontFamily: Fonts.Poppins_Italic,
      color: Colors.gray_text_color,
    },
    value: {
      fontSize: SF(15),
      fontFamily: Fonts.Poppins_Italic,
      color: Colors.black_text_color,
    },
    arrowButton: {
      marginRight: 0,
    },
});