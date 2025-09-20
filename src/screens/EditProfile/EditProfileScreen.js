import React, { useMemo, useState } from "react";
import { View, Image, TouchableOpacity, Appearance, ScrollView } from "react-native";
import { ProfileTabStyles, Style } from '../../styles';
import { RouteName } from '../../routes';
import { Button, Input, Spacing, VectorIcon } from "../../components";
import { useTranslation } from "react-i18next";
import images from "../../index";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useTheme } from "@react-navigation/native";
import { darkTheme, lightTheme } from "../../utils/Themes";
import { useSelector } from "react-redux";

const EditProfileScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const array = {
    FirstName: t("Melissa"),
    SecondName: t("Peters"),
    mobileNumber: '+91 93130055XX',
    Email: 'example123@gmail.com',
  }
  const [state, setState] = useState(array);
  const onoknutton = () => {
    showMessage({
      message: t("Submit_successfully"),
      type: "success",
    });
    navigation.navigate(RouteName.HOME_SCREEN)
  }

  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const Styles= useMemo(() => Style(Colors), [Colors])
  const ProfileTabStyle= useMemo(() => ProfileTabStyles(Colors), [Colors])

  return (
    <View style={ProfileTabStyle.EPcontainer}>
      <ScrollView>
      <Spacing space={20} />
      <View style={ProfileTabStyle.profileSection}>
        <View>
          <Image
            source={images.user}
            style={ProfileTabStyle.profileImage}
          />
          <TouchableOpacity style={ProfileTabStyle.editIcon}>
            <VectorIcon icon="FontAwesome" name="photo" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.SetPaddingd}>
        <Input
          title={t("First_name")}
          placeholder={t("First_name")}
          value={state.FirstName}
          onChangeText={(text) => setState({ ...state, FirstName: text })}
          placeholderTextColor={Colors.gray_text_color}
          titleStyle={Styles.titleStyle}
          inputStyle={Styles.input_style}
        />
        <Spacing space={20} />
        <Input
          title={t("Second_name")}
          placeholder={t("Second_name")}
          value={state.SecondName}
          onChangeText={(text) => setState({ ...state, SecondName: text })}
          placeholderTextColor={Colors.gray_text_color}
          titleStyle={Styles.titleStyle}
          inputStyle={Styles.input_style}
        />
        <Spacing space={20} />
        <Input
          title={t("Mobile_Numbe")}
          placeholder={t("Mobile_Numbe")}
          value={state.mobileNumber}
          onChangeText={(text) => setState({ ...state, mobileNumber: text })}
          placeholderTextColor={Colors.gray_text_color}
          titleStyle={Styles.titleStyle}
          inputStyle={Styles.input_style}
        />
        <Spacing space={20} />
        <Input
          title={t("Email")}
          placeholder={t("Email")}
          value={state.Email}
          onChangeText={(text) => setState({ ...state, Email: text })}
          placeholderTextColor={Colors.gray_text_color}
          titleStyle={Styles.titleStyle}
          inputStyle={Styles.input_style}
        />
      </View>
      <Spacing space={70}/>
      </ScrollView>
     
      <View style={ProfileTabStyle.BotttomAbs}>
        <Button title={t("Update")}
          onPress={() => onoknutton()}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
