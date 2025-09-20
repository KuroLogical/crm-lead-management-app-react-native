import React, {  useMemo } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { HomeTabStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { darkTheme, lightTheme } from '../../utils';
import { Spacing, VectorIcon } from '../../components';
import { useSelector } from 'react-redux';

const TasksScreen = (props) => {
  const { t } = useTranslation();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
  const data = [
    { name: t("Task_name_1"), type: t("Task_type_1"), status: t("Task_status_1"), Time: t("Task_time_1"), icon: 'AntDesign', icon_name: 'close', icon_color: Colors.red },
    { name: t("Task_name_2"), type: t("Task_type_2"), status: t("Task_status_2"), Time: t("Task_time_2"), icon: 'AntDesign', icon_name: 'check', icon_color: Colors.green_color },
    { name: t("Task_name_3"), type: t("Task_type_3"), status: t("Task_status_3"), Time: t("Task_time_3"), icon: 'AntDesign', icon_name: 'check', icon_color: Colors.green_color },
    { name: t("Task_name_4"), type: t("Task_type_4"), status: t("Task_status_4"), Time: t("Task_time_4"), icon: 'AntDesign', icon_name: 'close', icon_color: Colors.red },
    { name: t("Task_name_5"), type: t("Task_type_5"), status: t("Task_status_5"), Time: t("Task_time_5"), icon: 'AntDesign', icon_name: 'check', icon_color: Colors.green_color },
    { name: t("Task_name_6"), type: t("Task_type_6"), status: t("Task_status_6"), Time: t("Task_time_6"), icon: 'AntDesign', icon_name: 'close', icon_color: Colors.red },
  ];
  return (
    <View style={HomeTabStyles.container}>
      <Spacing space={20}/>
      <View style={HomeTabStyles.PaddingHorizontal}>
        <Text style={HomeTabStyles.HomeTitle}>{t("New_Activity_For_Today")}</Text>
        <Spacing space={20} />
        <View style={HomeTabStyles.Width100}>
          <TouchableOpacity  style={HomeTabStyles.NewFlexRow}>
            <Text style={HomeTabStyles.MeetingText}>{t("Tasks")}</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={HomeTabStyles.NewFlexRow}>
            <Text style={HomeTabStyles.MeetingText}>{t("Related")}</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={HomeTabStyles.NewFlexRow}>
            <Text style={HomeTabStyles.MeetingText}>{t("Details")}</Text>
          </TouchableOpacity>
        </View>
        <Spacing space={20} />
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
    </View>
  );
};
export default TasksScreen;