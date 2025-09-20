import React, { useMemo, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ReviewsStyle } from '../../styles';
import { Button, Input, Spacing } from '../../components';
import images from "../../index";
import { RouteName } from "../../routes";
import { useTranslation } from "react-i18next";
import { showMessage } from "react-native-flash-message";
import RatingScreen from "../../components/commonComponents/Rating";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../utils";
const ReviewsScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState('Yes');
  const [Title, setTitle] = useState('');
  const handleFeedback = (option) => {
    setSelectedOption(option);
  };
  const onoknutton = () => {
    showMessage({
      message: t("Submit_successfully"),
      type: "success",
    });
    navigation.navigate(RouteName.HOME_SCREEN)
  }
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const ReviewsStyles = useMemo(() => ReviewsStyle(Colors), [Colors]);
  return (
    <View style={ReviewsStyles.container}>
      <Spacing space={40} />
      <View style={ReviewsStyles.header}>
        <Image
          source={images.loginLogo}
          style={ReviewsStyles.profilePicture}
        />
        <Text style={ReviewsStyles.name}>{t("CRM")}</Text>
        <View style={ReviewsStyles.rating}>
          <RatingScreen
         
           />
        </View>
      </View>
      <Spacing space={40} />
      <View style={ReviewsStyles.feedback}>
        <Text style={ReviewsStyles.question}>{t("future?")}</Text>
        <View style={ReviewsStyles.options}>
          <TouchableOpacity
            onPress={() => handleFeedback('Yes')}
            style={[
              ReviewsStyles.option,
              selectedOption === 'Yes' ? ReviewsStyles.selectedOption : null,
            ]}
          >
            <Text style={[
              ReviewsStyles.optionText,
              selectedOption === 'Yes' ? ReviewsStyles.selectedoptionText : null,
            ]} >{t("Yes")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFeedback('No opinion')}
            style={[
              ReviewsStyles.option,
              selectedOption === 'No opinion' ? ReviewsStyles.selectedOption : null,
            ]}
          >
            <Text style={[
              ReviewsStyles.optionText,
              selectedOption === 'No opinion' ? ReviewsStyles.selectedoptionText : null,
            ]}>{t("No_opinion")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFeedback('No')}
            style={[
              ReviewsStyles.option,
              selectedOption === 'No' ? ReviewsStyles.selectedOption : null,
            ]}
          >
            <Text style={[
              ReviewsStyles.optionText,
              selectedOption === 'No' ? ReviewsStyles.selectedoptionText : null,
            ]}>{t("No")}</Text>
          </TouchableOpacity>
        </View>
        <Input
            title={t("Comment")}
            placeholder={t("Type_text_hear")}
            onChangeText={(value) => setTitle(value)}
            value={Title}
            numberOfLines={7}
            textAlignVertical='top'
          />
        <Spacing space={20} />
        <Button title={("Submit")} onPress={() => onoknutton()} />
      </View>
    </View>
  );
};
export default ReviewsScreen;


