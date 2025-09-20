import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, Image, Appearance } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useTranslation } from "react-i18next";
import { Search, Spacing } from '../../components';
import images from '../../index';
import { Pressable } from 'react-native';
import { LeadTabStyle } from '../../styles';
import {  darkTheme, lightTheme, SH } from '../../utils';
import { useSelector } from 'react-redux';

const ContactsTab = (props) => {
  const { t } = useTranslation();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const LeadTabStyles = useMemo(() => LeadTabStyle(Colors), [Colors]);
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
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <ScrollView style={LeadTabStyles.container}>
      <Spacing space={20} />
      <View style={{paddingHorizontal:SH(5)}}>
        <Search placeholder={t("Search_contact")} />
      </View>
      <Spacing space={20} />
      {data.map((item, index) => (
        <Pressable style={[LeadTabStyles.PaddingHorizontal]} key={index} onPress={() => setSelectedCard(index)}>
          <View style={[LeadTabStyles.card]}>
            <View style={LeadTabStyles.cardContent}>
              <Image source={images.usericon} style={LeadTabStyles.profilePic} />
              <View style={LeadTabStyles.cardText}>
                <Text style={LeadTabStyles.name}>{item.name}</Text>
                <Text style={LeadTabStyles.company}>{item.Email}</Text>
              </View>
              <Button
                type="clear"
                icon={<Icon name="phone-call" type="feather" color={Colors.gray_text_color} />}
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
export default ContactsTab;