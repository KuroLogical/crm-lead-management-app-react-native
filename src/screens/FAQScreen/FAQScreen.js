import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Appearance } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HelpScreenStyles, Style } from '../../styles';
import { Spacing, FAQData, Search } from '../../components';
import {  SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { darkTheme, lightTheme } from '../../utils/Themes';
import { useSelector } from 'react-redux';

const HelpCenterScreen = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('Contact us');
  const contactOptions = [
    { name: t("Customer_Service"), icon: 'headset-outline', },
    { name: t("WhatsApp"), icon: 'logo-whatsapp', },
    { name: t("Website"), icon: 'globe-outline', },
    { name: t("Facebook"), icon: 'logo-facebook', },
    { name: t("Twitter"), icon: 'logo-twitter', },
    { name: t("Instagram"), icon: 'logo-instagram', },
  ];

  const Faqdataset = [
    {
      "id": 1,
      "question": t("question_1"),
      "answer":t("answer_1"),
    },
    {
      "id": 2,
      "question": t("question_2"),
      "answer": t("answer_2"),
    },
    {
      "id": 3,
      "question": t("question_3"),
      "answer": t("answer_3"),
    },
    {
      "id": 4,
      "question":t("question_4"),
      "answer": t("answer_4"),
    },
    {
      "id": 5,
      "question":t("question_5"),
      "answer": t("answer_5"),
    },
    {
      "id": 6,
      "question": t("question_6"),
      "answer": t("answer_6"),
    },
    {
      "id": 7,
      "question":t("question_7"),
      "answer": t("answer_7"),
    },
    {
      "id": 8,
      "question": t("question_8"),
      "answer": t("answer_8"),
    },
  ];
  const handleFeedback = (option) => {
    setSelectedOption(option);
  };
  const [selectedOption, setSelectedOption] = useState(1);
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const Styles= useMemo(() => Style(Colors), [Colors])
  const HelpScreenStyle= useMemo(() => HelpScreenStyles(Colors), [Colors])
  return (
    <View style={Styles.container}>
      <Spacing space={20} />
      <Search placeholder={t("Search")} />
      <Spacing space={0} />
      <View style={Styles.tabContainer1}>
        <TouchableOpacity
          style={[Styles.tab, activeTab === 'FAQ' && Styles.activeTab]}
          onPress={() => setActiveTab('FAQ')}
        >
          <Text style={[Styles.tabText, activeTab === 'FAQ' && Styles.activeTabText]}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.tab, activeTab === 'Contact us' && Styles.activeTab]}
          onPress={() => setActiveTab('Contact us')}
        >
          <Text style={[Styles.tabText, activeTab === 'Contact us' && Styles.activeTabText]}>{t("Contact_us")}</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'Contact us' ? (
        <ScrollView style={[Styles.contentContainer]}>
          <Spacing space={SH(10)} />
          {contactOptions.map((option, index) => (
            <View style={Styles.PaddingHorizontal}>
              <TouchableOpacity key={index} style={Styles.option}>
                <Icon name={option.icon} size={24} color={Colors.theme_background} />
                <Text style={Styles.optionText}>{option.name}</Text>
              </TouchableOpacity>
              <Spacing space={SH(10)} />
            </View>
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={[Styles.contentContainer]}>
            <Spacing space={SH(20)} />
          <View style={HelpScreenStyle.options}>
            <TouchableOpacity
              onPress={() => handleFeedback('Yes')}
              style={[
                HelpScreenStyle.option,
                selectedOption === 'Yes' ? HelpScreenStyle.selectedOption : null,
              ]}
            >
              <Text style={[
                HelpScreenStyle.optionText,
                selectedOption === 'Yes' ? HelpScreenStyle.selectedoptionText : null,
              ]} >{t("All")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleFeedback('No opinion')}
              style={[
                HelpScreenStyle.option,
                selectedOption === 'No opinion' ? HelpScreenStyle.selectedOption : null,
              ]}
            >
              <Text style={[
                HelpScreenStyle.optionText,
                selectedOption === 'No opinion' ? HelpScreenStyle.selectedoptionText : null,
              ]}>{t("Services")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleFeedback('No')}
              style={[
                HelpScreenStyle.option,
                selectedOption === 'No' ? HelpScreenStyle.selectedOption : null,
              ]}
            >
              <Text style={[
                HelpScreenStyle.optionText,
                selectedOption === 'No' ? HelpScreenStyle.selectedoptionText : null,
              ]}>{t("General")}</Text>
            </TouchableOpacity>
          </View>
          <Spacing space={SH(0)} />
          <View style={{}}>
            <FlatList
              data={Faqdataset}
              renderItem={({ item }) => (<FAQData
                item={item}
              />)}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default HelpCenterScreen;
