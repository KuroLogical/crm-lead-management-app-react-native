import { StyleSheet } from 'react-native';
import { SF, Fonts, SH, widthPercent, heightPercent, hexToRgba, Colors } from '../../utils';

export default HomeTabStyle = (Colors) => StyleSheet.create({
  // export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white_text_color
    },
    flexRow: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    salesSummary: {
      backgroundColor: Colors.theme_background,
      padding: SH(20),
    },
    salesSummaryTitle: {
      color: Colors.light_gray_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(20),
    },
    salesAmount: {
      color: Colors.white_color,
      fontSize: SF(35),
      fontFamily: Fonts.Poppins_Bold,
      fontWeight: 'bold',
      marginVertical: 8,
    },
    summaryDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    summaryDetail: {
      alignItems: 'center',
    },
    summaryDetailText: {
      color: Colors.white_color,
      fontSize: SF(20),
      fontWeight: 'bold',
    },
    summaryDetailSubtext: {
      color: Colors.light_gray_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(15),
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      paddingVertical: 10,
    },
    tab: {
      fontSize: 16,
      color: 'gray',
    },
    activeTab: {
      fontWeight: 'bold',
      color: 'black',
    },
    PaddingHorizontal: {
      paddingHorizontal: SH(20)
    },
    HomeTitle: {
      color: Colors.black_text_color,
      fontFamily: Fonts.Poppins_Bold,
      fontSize: SF(20),
    },
    upcomingTasks: {
      paddingHorizontal: SH(20)
    },
    tasksTitle: {
      color: Colors.black_text_color,
      fontFamily: Fonts.Poppins_Bold,
      fontSize: SF(20),
    },
    task: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: SH(20),
      padding:SH(10),
      borderRadius:SH(10),
      backgroundColor:Colors.white_text_color,
      elevation: 2,
      shadowColor: Colors.black_text_color,
      shadowOffset: { width: 0, height: 4 }, 
      shadowOpacity: 0.2, 
      shadowRadius: 8, 
    },
    taskIcon: {
      padding: SH(10),
      backgroundColor: "#bfc0f2",
      borderRadius: SH(200)
    },
    taskRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
  
    },
    taskTitleView: {
      paddingLeft: SH(15)
    },
    OverdueView: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
  
    },
    taskTitle: {
      color: Colors.black_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(18),
    },
    taskDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    taskTime: {
      color: Colors.gray_text_color,
      fontSize: SF(15),
      fontFamily: Fonts.Poppins_Italic
    },
    taskStatusMeeting: {
      color: Colors.gray_text_color,
      fontSize: SF(15),
      fontFamily: Fonts.Poppins_Italic
    },
    taskStatusOverdue: {
      paddingLeft: SH(10),
      color: Colors.red,
      fontSize: SF(15),
      fontFamily: Fonts.Poppins_Italic
    },
    taskStatusPlanned: {
      color: Colors.green_color,
      fontSize: SF(15),
      fontFamily: Fonts.Poppins_Italic
    },
    Width100: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    NewFlexRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: "32%",
      alignItems: 'center',
      borderColor: Colors.black_text_color,
      borderWidth: SH(0),
      borderRadius: SH(10),
      padding: SH(5),
      backgroundColor:Colors.white_text_color,
      elevation: 2,
      shadowColor: Colors.black_text_color,
      shadowOffset: { width: 0, height: 4 }, 
      shadowOpacity: 0.2, 
      shadowRadius: 8, 
    },
    MeetingText: {
      color: Colors.black_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(18),
      paddingLeft: SH(5)
    },




    // Dropdown_container

    Dropdown_container: {
      backgroundColor: Colors.theme_background,
     
    },
    Dropdown_label: {
      color: Colors.black_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(20),
    },
    Dropdown_dropdown: {
      height: SH(50),
      width:SH(150),
      borderColor: Colors.white_color,
      borderWidth: SH(1),
      borderRadius: SH(200),
      paddingHorizontal: SH(10),
      backgroundColor:Colors.theme_background,
    },
    Dropdown_placeholderStyle: {
      fontSize: SF(14),
      fontFamily: Fonts.Poppins_Medium,
      color: Colors.black_text_color,
    },
    Dropdown_selectedTextStyle: {
      fontSize: SF(14),
      fontFamily: Fonts.Poppins_Medium,
      color:  Colors.white_color,
    },
});