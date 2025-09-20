import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useTranslation } from "react-i18next";
import {  Spacing } from '../../components';
import images from '../../index';
import { Pressable } from 'react-native';
import { DealsTabStyle } from '../../styles';
import { darkTheme, lightTheme } from '../../utils';
import { useSelector } from 'react-redux';

const DealsTab = (props) => {
  const { t } = useTranslation();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const DealsTabStyles = useMemo(() => DealsTabStyle(Colors), [Colors]);
  const tabs = [t("All"), t("New")];
  const data = [
    { name: t("Name_1"), company: t("Company_1"), value: '$120,100', profilePic: images.user_1 },
    { name: t("Name_1"), company: t("Company_2"), value: '$80,320', profilePic: images.user_2 },
    { name: t("Name_1"), company: t("Company_3"), value: '$350,500', profilePic: images.user_3 },
    { name: t("Name_1"), company: t("Company_4"), value: '$1,260', profilePic: images.user_4 },
    { name: t("Name_1"), company: t("Company_5"), value: '$1,260', profilePic: images.user_5 },
    { name: t("Name_1"), company: t("Company_6"), value: '$1,260', profilePic: images.user_6 }
  ];
  const [selectedTab, setSelectedTab] = useState('All');
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <ScrollView style={DealsTabStyles.container}>
      <Spacing space={20} />
      <View style={DealsTabStyles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity style={[DealsTabStyles.tabView, selectedTab === tab && DealsTabStyles.activeTabView]} key={index} onPress={() => setSelectedTab(tab)}>
            <Text style={[DealsTabStyles.tab, selectedTab === tab && DealsTabStyles.activeTab]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Spacing space={20} />
      {data.map((item, index) => (
        <Pressable style={[DealsTabStyles.PaddingHorizontal]} key={index} onPress={() => setSelectedCard(index)}>
          <View style={[DealsTabStyles.card]}>
            <View style={DealsTabStyles.cardContent}>
              <Image source={item.profilePic} style={DealsTabStyles.profilePic} />
              <View style={DealsTabStyles.cardText}>
                <Text style={DealsTabStyles.name}>{item.name}</Text>
                <Text style={DealsTabStyles.company}>{item.company}</Text>
                <View style={[DealsTabStyles.PipelineBorder]}>
                  <Text style={DealsTabStyles.value}>{item.value}</Text>
                </View>
              </View>
              <Button
                type="clear"
                icon={<Icon name="arrow-up-right" type="feather" color={Colors.theme_background} />}
                buttonStyle={DealsTabStyles.arrowButton}
              />
            </View>
          </View>
        </Pressable>
      ))}
      <Spacing space={60} />
    </ScrollView>
  );
};
export default DealsTab;