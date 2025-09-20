import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';
import images from '../../index';
import { Colors, darkTheme, Fonts, lightTheme, SF, SH } from '../../utils';
import { Spacing, VectorIcon } from '../../components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AccountsTabStyle} from '../../styles';

const AccountsScreen = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const AccountsTabStyles = useMemo(() => AccountsTabStyle(Colors), [Colors]);
  return (
    <ScrollView style={AccountsTabStyles.container}>
      <View style={AccountsTabStyles.profileSection}>
        <Image
          source={images.user_3}
          style={AccountsTabStyles.profileImage}
        />
        <Spacing space={10} />
        <Text style={AccountsTabStyles.profileName}>Eva Robinson</Text>
        <Spacing space={5} />
        <Text style={AccountsTabStyles.profileRole}>CEO, Inc. Alabama Machinery & Supply</Text>
        <Spacing space={20} />
        <View style={AccountsTabStyles.iconRow}>
          <TouchableOpacity >
            <VectorIcon icon="Ionicons" size={25} color={Colors.theme_background} style={AccountsTabStyles.iconButton} name='call' />
          </TouchableOpacity>
          <TouchableOpacity >
            <VectorIcon icon="Ionicons" color={Colors.theme_background} size={25} style={AccountsTabStyles.iconButton} name='chatbubble' />
          </TouchableOpacity>
          <TouchableOpacity >
            <VectorIcon icon="Ionicons" color={Colors.theme_background} size={25} style={AccountsTabStyles.iconButton} name='videocam' />
          </TouchableOpacity>
          <TouchableOpacity >
            <VectorIcon icon="Ionicons" color={Colors.theme_background} size={25} style={AccountsTabStyles.iconButton} name='mail' />
          </TouchableOpacity>
        </View>
      </View>
      <Spacing space={20} />
      <View style={AccountsTabStyles.infoSection}>
        <Text style={AccountsTabStyles.infoTitle}>{t("Task_schedule")}</Text>
        <VectorIcon icon="Ionicons" color={Colors.theme_background} size={25} name='chevron-forward' />
      </View>
      <View style={AccountsTabStyles.calendarSection}>
        <Calendar
          style={AccountsTabStyles.calendar}
          theme={{
            backgroundColor: Colors.theme_background,
            calendarBackground: Colors.theme_background,
            textSectionTitleColor: Colors.black_text_color,
            selectedDayBackgroundColor: '#4caf50',
            selectedDayTextColor: Colors.red,
            todayTextColor: Colors.black_text_color,
            dayTextColor: Colors.white_text_color,
            textDisabledColor: Colors.black_text_color,
            arrowColor: Colors.white_text_color,
            monthTextColor: Colors.white_text_color,
          }}
          markedDates={{
            '2023-10-12': { marked: true, dotColor: '#ff0000' },
            '2023-10-13': { marked: true, dotColor: '#00ff00' },
            '2023-10-14': { marked: true, dotColor: '#0000ff' },
          }}
        />
      </View>
      <Spacing space={20} />
    </ScrollView>
  );
};



export default AccountsScreen;
