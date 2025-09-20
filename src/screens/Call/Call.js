import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView,   TouchableOpacity } from 'react-native';
import {  Button, Icon } from 'react-native-elements';
import { useTranslation } from "react-i18next";
import { Spacing, VectorIcon } from '../../components';
import images from '../../index';
import { Pressable } from 'react-native';
import { CallStyle } from '../../styles';
import {  darkTheme, lightTheme, SF } from '../../utils';
import { useSelector } from 'react-redux';

const Call = (props) => {
  const { t } = useTranslation();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const CallStyles= useMemo(() => CallStyle(Colors), [Colors]);
  const tabs = [t("All"),t("Missed")];
  const data = [
    { name: t("Name_1"), Email: t("+91 93130055XX"), profilePic: images.user_1 },
    { name: t("Name_2"), Email: t("+91 93130055XX"), profilePic: images.user_2 },
    { name: t("Name_3"), Email: t("+91 93130055XX"), profilePic: images.user_3 },
    { name: t("Name_4"), Email: t("+91 93130055XX"), profilePic: images.user_4 },
    { name: t("Name_5"), Email: t("+91 93130055XX"), profilePic: images.user_5 },
    { name: t("Name_6"), Email: t("+91 93130055XX"), profilePic: images.user_6 },
    { name: t("Name_7"), Email: t("+91 93130055XX"), profilePic: images.user_3 },
    { name: t("Name_8"), Email: t("+91 93130055XX"), profilePic: images.user_4 },
    { name: t("Name_9"), Email: t("+91 93130055XX"), profilePic: images.user_5 },
    { name: t("Name_10"), Email: t("+91 93130055XX"), profilePic: images.user_6 }
  ];
  const [selectedTab, setSelectedTab] = useState('All');
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <ScrollView style={CallStyles.container}>
      <Spacing space={20} />
      <View style={CallStyles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity style={[CallStyles.tabView, selectedTab === tab && CallStyles.activeTabView]} key={index} onPress={() => setSelectedTab(tab)}>
            <Text style={[CallStyles.tab, selectedTab === tab && CallStyles.activeTab]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Spacing space={20} />
      {data.map((item, index) => (
        <Pressable style={[CallStyles.PaddingHorizontal]} key={index} onPress={() => setSelectedCard(index)}>
          <View style={[CallStyles.card]}>
            <View style={CallStyles.cardContent}>
            <VectorIcon
                color={Colors.black_text_color}
                name="call-out"
                icon="SimpleLineIcons"
                size={SF(20)}
            />
              <View style={CallStyles.cardText}>
                <Text style={CallStyles.name}>{item.name}</Text>
                <Text style={CallStyles.company}>{item.Email}</Text>
              </View>
              <Button
                type="clear"
                icon={<Icon name="alert-circle" type="feather" color={Colors.gray_text_color} />}
                buttonStyle={CallStyles.arrowButton}
              />
            </View>
          </View>
        </Pressable>
      ))}
      <Spacing space={60} />
    </ScrollView>
  );
};
export default Call;