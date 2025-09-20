import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView,  Image, TouchableOpacity } from 'react-native';
import {  Button, Icon } from 'react-native-elements';
import { useTranslation } from "react-i18next";
import { Spacing } from '../../components';
import images from '../../index';
import { Pressable } from 'react-native';
import { LeadTabStyle } from '../../styles';
import {  darkTheme, lightTheme } from '../../utils';
import { useSelector } from 'react-redux';

const LeadTab = (props) => {
  const { t } = useTranslation();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const LeadTabStyles = useMemo(() => LeadTabStyle(Colors), [Colors]);
  const tabs = [t("All"),t("Permanent"),t("Hot"),t("New")];
  const data = [
    { name:t("Name_1"), Email:t("Email_1"), profilePic: images.user_1 },
    { name:t("Name_2"), Email:t("Email_2"), profilePic: images.user_2 },
    { name:t("Name_3"), Email:t("Email_3"), profilePic: images.user_3 },
    { name:t("Name_4"), Email:t("Email_4"), profilePic: images.user_4 },
    { name:t("Name_5"), Email:t("Email_5"), profilePic: images.user_5 },
    { name:t("Name_6"), Email:t("Email_6"), profilePic: images.user_6 },
    { name:t("Name_7"), Email:t("Email_7"), profilePic: images.user_3 },
    { name:t("Name_8"), Email:t("Email_8"), profilePic: images.user_4 },
    { name:t("Name_9"), Email:t("Email_9"), profilePic: images.user_5 },
    { name:t("Name_10"), Email:t("Email_10"), profilePic: images.user_6 }
  ];
  const [selectedTab, setSelectedTab] = useState('All');
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <ScrollView style={LeadTabStyles.container}>
      <Spacing space={20} />
      <View style={LeadTabStyles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity style={[LeadTabStyles.tabView, selectedTab === tab && LeadTabStyles.activeTabView]} key={index} onPress={() => setSelectedTab(tab)}>
            <Text style={[LeadTabStyles.tab, selectedTab === tab && LeadTabStyles.activeTab]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Spacing space={20} />
      {data.map((item, index) => (
        <Pressable style={[LeadTabStyles.PaddingHorizontal]} key={index} onPress={() => setSelectedCard(index)}>
          <View style={[LeadTabStyles.card]}>
            <View style={LeadTabStyles.cardContent}>
              <Image source={item.profilePic} style={LeadTabStyles.profilePic} />
              <View style={LeadTabStyles.cardText}>
                <Text style={LeadTabStyles.name}>{item.name}</Text>
                <Text style={LeadTabStyles.company}>{item.Email}</Text>
              </View>
              <Button
                type="clear"
                icon={<Icon name="alert-circle" type="feather" color={Colors.gray_text_color} />}
                buttonStyle={LeadTabStyles.arrowButton}
              />
            </View>
          </View>
        </Pressable>
      ))}
      <Spacing space={60} />
    </ScrollView>
  );
};
export default LeadTab;