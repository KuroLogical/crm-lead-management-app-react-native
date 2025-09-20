import React, { useMemo, useState } from 'react';
import { ScrollView, Text, View,Image } from "react-native";
import { AddLeadStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import images from '../../index';
import { Button, Input, Spacing, VectorIcon } from '../../components';
import {  darkTheme, lightTheme, SF } from '../../utils';
import { showMessage } from "react-native-flash-message";
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../routes';
import { useSelector } from 'react-redux';
const AddLeads = (props) => {
  const { t } = useTranslation();
  const [Lead_owner, setLead_owner] = useState('');
  const [Company, setCompany] = useState('');
  const [Salutation, setSalutation] = useState('');
  const [First_Name, setFirst_Name] = useState('');
  const [Last_name, setLast_name] = useState('');
  const [Title, setTitle] = useState('');
  const [Email, setEmail] = useState('');
  const [Phon, setPhon] = useState('');
  const navigation = useNavigation();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const AddLeadStyles = useMemo(() => AddLeadStyle(Colors), [Colors]);
  return (
    <View style={AddLeadStyles.Container} >
      <ScrollView >
        <Spacing space={20} />
        <View style={AddLeadStyles.AddleadImageView}>
          <View style={AddLeadStyles.AddleadImageView2}>
            <Image style={AddLeadStyles.AddleadImage} source={images.usericon} />
            <VectorIcon icon="MaterialIcons" style={AddLeadStyles.AddleadIcon} size={SF(25)} name="add-a-photo" color={Colors.theme_background} />
          </View>
        </View>
        <Spacing space={30} />
        <Text style={AddLeadStyles.AddleadTextTitle}>{t("Lead_Information")}</Text>
        <Spacing space={20} />
        <View style={AddLeadStyles.AddleadFormView}>
          <Input
            title={t("Lead_owner")}
            placeholder={t("Lead_owner")}
            onChangeText={(value) => setLead_owner(value)}
            value={Lead_owner}
            placeholderTextColor={Colors.gray_text_color}
          />
          <Spacing space={20} />
          <Input
            title={t("Company")}
            placeholder={t("Company")}
            onChangeText={(value) => setCompany(value)}
            value={Company}
            placeholderTextColor={Colors.gray_text_color}
          />
          <Spacing space={20} />
          <Input
            title={t("Salutation")}
            placeholder={t("Salutation")}
            onChangeText={(value) => setSalutation(value)}
            value={Salutation}
            placeholderTextColor={Colors.gray_text_color}
          />
          <Spacing space={20} />
          <Input
            title={t("First_Name")}
            placeholder={t("First_Name")}
            onChangeText={(value) => setFirst_Name(value)}
            value={First_Name}
            placeholderTextColor={Colors.gray_text_color}
          />
          <Spacing space={20} />
          <Input
            title={t("Last_name")}
            placeholder={t("Last_name")}
            onChangeText={(value) => setLast_name(value)}
            value={Last_name}
            placeholderTextColor={Colors.gray_text_color}
          />
          <Spacing space={20} />
          <Input
            title={t("Title")}
            placeholder={t("Title")}
            onChangeText={(value) => setTitle(value)}
            value={Title}
            placeholderTextColor={Colors.gray_text_color}
          />
          <Spacing space={20} />
          <Input
            title={t("Email")}
            placeholder={t("Email")}
            onChangeText={(value) => setEmail(value)}
            value={Email}
            placeholderTextColor={Colors.gray_text_color}
          />
          <Spacing space={20} />
          <Input
            title={t("Phon")}
            placeholder={t("Phon")}
            onChangeText={(value) => setPhon(value)}
            value={Phon}
            placeholderTextColor={Colors.gray_text_color}
          />
        </View>
        <Spacing space={80} />
      </ScrollView>
      <View style={AddLeadStyles.AbsoluteButton} >
        <Button title={t("Submit")} onPress={() => {navigation.navigate(RouteName.HOME_SCREEN);
            showMessage({
            message:t( "Successfully_add_lead"),
            type: "success",
          })
          }}/>
      </View>
    </View>
  );
};
export default AddLeads;