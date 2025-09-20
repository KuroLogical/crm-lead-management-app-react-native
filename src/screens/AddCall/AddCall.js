import React, { useMemo, useState } from 'react';
import { ScrollView, Text, View, } from "react-native";
import { AddLeadStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Input, Repeat, Spacing } from '../../components';
import { Colors, darkTheme, lightTheme, SF } from '../../utils';
import { showMessage } from "react-native-flash-message";
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../routes';
import { useSelector } from 'react-redux';


const AddCall = (props) => {
  const { t } = useTranslation();
  const [Title, setTitle] = useState('');
  const navigation = useNavigation();
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const AddLeadStyles = useMemo(() => AddLeadStyle(Colors), [Colors]);
  const Demohost = [
    { label: t("Select_anyone"), value: '1' },
    { label:t("option_1"), value: '2' },
    { label: t("option_2"), value: '3' },
    { label:t("option_3"), value: '4' },
    { label: t("option_4"), value: '5' },
  ];
  const Selected_Participents = [
    { label: t("Select_anyone"), value: '1' },
    { label:t("option_5"), value: '2' },
    { label: t("option_6"), value: '3' },
    { label:t("option_7"), value: '4' },
    { label: t("option_8"), value: '5' },
  ];
  const Name = [
    { label: t("Select_anyone"), value: '1' },
    { label:t("option_9"), value: '2' },
    { label: t("option_10"), value: '3' },
    { label:t("option_11"), value: '4' },
    { label: t("option_12"), value: '5' },
  ];
  const email_id = [
    { label: t("Select_anyone"), value: '1' },
    { label:t("option_13"), value: '2' },
    { label: t("option_14"), value: '3' },
    { label:t("option_15"), value: '4' },
    { label: t("option_16"), value: '5' },
  ];
  const Number = [
    { label: t("Select_anyone"), value: '1' },
    { label:t("option_17"), value: '2' },
    { label: t("option_18"), value: '3' },
    { label:t("option_19"), value: '4' },
    { label: t("option_20"), value: '5' },
  ];
  return (
    <View style={AddLeadStyles.Container} >
      <ScrollView >
        <Spacing space={30} />
        <Text style={AddLeadStyles.AddleadTextTitle}>{t("Call_Information")}</Text>
        <Spacing space={20} />
        <View style={AddLeadStyles.PaddingHorizontal}>
          <Repeat handleName={t("Name")} data={Demohost}/>
          <Spacing space={20} />
          <Repeat handleName={t("Email")} data={email_id}/>
          <Spacing space={20} />
          <DatePicker handleName={t("From")}/>
          <Spacing space={20} />
          <Repeat handleName={t("Inbound")}  data={Name}/>
          <Spacing space={20} />
          <Repeat handleName={t("Completed")} data={Demohost}/>
          <Spacing space={20} />
          <Repeat handleName={t("Consectetur")}  data={Selected_Participents}/>
        </View>
        <Spacing space={30} />
        <Text style={AddLeadStyles.AddleadTextTitle}>{t("Call_Information")}</Text>
        <Spacing space={20} />
        <View style={AddLeadStyles.PaddingHorizontal}>
        <Repeat handleName={t("Reference")} data={Demohost}/>
          <Spacing space={20} />
          <Repeat handleName={t("Number")} data={Number}/>
        </View>
        <Spacing space={20} />
        <View style={AddLeadStyles.AddleadFormView}>
          <Input
            title={t("Description_information")}
            placeholder={t("Description_information")}
            onChangeText={(value) => setTitle(value)}
            value={Title}
            numberOfLines={4}
            textAlignVertical='top'
            placeholderTextColor={Colors.gray_text_color}
          />
        </View>
        <Spacing space={100} />
      </ScrollView>
      <View style={AddLeadStyles.AbsoluteButton} >
        <Button title={t("Submit")}  onPress={() => {navigation.navigate(RouteName.HOME_SCREEN);
            showMessage({
            message:t( "Successfully_add_call"),
            type: "success",
          })
          }} />
      </View>
    </View>
  );
};
export default AddCall;