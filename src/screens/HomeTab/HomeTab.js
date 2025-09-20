import React, { useMemo } from 'react';
import { Text, View, ScrollView,  TouchableOpacity } from "react-native";
import { HomeTabStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import {  darkTheme, lightTheme} from '../../utils';
import { } from 'react-native';
import { HomeDropDown, Spacing, VectorIcon } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../routes';
import { useSelector } from 'react-redux';
const HomeTab = (props) => {
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
  const { t } = useTranslation();
  const navigation =useNavigation();
  const data = [
    { name: t("Task_name_1"), type: t("Task_type_1"), status: t("Task_status_1"), Time: t("Task_time_1"), icon: 'AntDesign', icon_name: 'close', icon_color: Colors.red },
    { name: t("Task_name_2"), type: t("Task_type_2"), status: t("Task_status_2"), Time: '09:00 am', icon: 'AntDesign', icon_name: 'check', icon_color: Colors.green_color },
    { name: t("Task_name_3"), type: t("Task_type_3"), status: t("Task_status_3"), Time: '09:00 am', icon: 'AntDesign', icon_name: 'check', icon_color: Colors.green_color },
    { name: t("Task_name_4"), type: t("Task_type_4"), status: t("Task_status_4"), Time: '09:00 am', icon: 'AntDesign', icon_name: 'close', icon_color: Colors.red },
    { name: t("Task_name_5"), type: t("Task_type_5"), status: t("Task_status_5"), Time: '09:00 am', icon: 'AntDesign', icon_name: 'check', icon_color: Colors.green_color },
    { name: t("Task_name_6"), type: t("Task_type_6"), status: t("Task_status_6"), Time: '09:00 am', icon: 'AntDesign', icon_name: 'close', icon_color: Colors.red },
  ];
  return (
    <ScrollView style={HomeTabStyles.container}>
      <View style={HomeTabStyles.salesSummary}>
        <View style={HomeTabStyles.flexRow}>
          <View>
            <Text style={HomeTabStyles.salesSummaryTitle}>{t("Sales_summary")}</Text>
            <Text style={HomeTabStyles.salesAmount}>$8681.97</Text>
          </View>
          <View>
            <HomeDropDown />
          </View>
        </View>
        <Spacing space={20} />
        <View style={HomeTabStyles.summaryDetails}>
          <View style={HomeTabStyles.summaryDetail}>
            <Text style={HomeTabStyles.summaryDetailText}>21</Text>
            <Text style={HomeTabStyles.summaryDetailSubtext}>{t("total_deals")}</Text>
          </View>
          <View style={HomeTabStyles.summaryDetail}>
            <Text style={HomeTabStyles.summaryDetailText}>$291.23</Text>
            <Text style={HomeTabStyles.summaryDetailSubtext}>{t("16_won")}</Text>
          </View>
          <View style={HomeTabStyles.summaryDetail}>
            <Text style={HomeTabStyles.summaryDetailText}>$122.97</Text>
            <Text style={HomeTabStyles.summaryDetailSubtext}>{t("5_lost")}</Text>
          </View>
        </View>
      </View>
      <Spacing space={20} />
      <View style={HomeTabStyles.PaddingHorizontal}>
        <Text style={HomeTabStyles.HomeTitle}>{t("New_Activity_For_Today")}</Text>
        <Spacing space={10} />
        <View style={HomeTabStyles.Width100}>
          <TouchableOpacity onPress={()=>navigation.navigate(RouteName.ADDMEETING)} style={HomeTabStyles.NewFlexRow}>
            <VectorIcon icon="AntDesign" color={Colors.theme_background} name="plussquare" size={20} />
            <Text style={HomeTabStyles.MeetingText}>{t("Meeting")}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate(RouteName.ADDTASK)} style={HomeTabStyles.NewFlexRow}>
            <VectorIcon icon="AntDesign" color={Colors.theme_background} name="plussquare" size={20} />
            <Text style={HomeTabStyles.MeetingText}>{t("Task")}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate(RouteName.ADDCALL)} style={HomeTabStyles.NewFlexRow}>
            <VectorIcon icon="AntDesign" color={Colors.theme_background} name="plussquare" size={20} />
            <Text style={HomeTabStyles.MeetingText}>{t("Call")}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Spacing space={20} />
      <View style={HomeTabStyles.upcomingTasks}>
        <Text style={HomeTabStyles.tasksTitle}>{t("Upcoming_tasks")}</Text>
        <Spacing space={10} />
        {data.map((item, index) => (
          <View key={index} style={HomeTabStyles.task}>
            <View style={HomeTabStyles.taskRow}>
              <View style={HomeTabStyles.taskIcon}>
                <VectorIcon icon={item.icon} color={item.icon_color} name={item.icon_name} size={25} />
              </View>
              <View style={HomeTabStyles.taskTitleView}>
                <Text style={HomeTabStyles.taskTitle}>{item.name}</Text>
                <View style={HomeTabStyles.OverdueView}>
                  <Text style={HomeTabStyles.taskStatusMeeting}>{item.type}</Text>
                  <Text style={[HomeTabStyles.taskStatusOverdue, { color: item.icon_color }]}>{item.status}</Text>
                </View>
              </View>
            </View>
            <View style={HomeTabStyles.taskDetails}>
              <Text style={HomeTabStyles.taskTime}>{item.Time}</Text>
            </View>
          </View>
        ))}
      </View>
      <Spacing space={60} />
    </ScrollView>
  );
};
export default HomeTab;