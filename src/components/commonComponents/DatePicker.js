import React, { useState, useMemo } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import {  SF, darkTheme, lightTheme } from '../../utils';
import moment from 'moment';
import VectorIcon from './VectoreIcons';
import { useTranslation } from 'react-i18next';
import { Style } from '../../styles';
import { useSelector } from 'react-redux';
function DatePicker(props) {
    const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
    const Colors = isDarkMode ? darkTheme : lightTheme;
    const Styles = useMemo(() => Style(Colors), [Colors]);
    const { t } = useTranslation();
    const [dateselcet, setdateselcet] = useState(t("10-12-2023"));
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDateTimePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDateTimePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleDatePicked = (date) => {
        hideDateTimePicker(),
            setdateselcet(moment(date, "YYYY-MM-DDTHH:mm:ss Z").local().format('DD-MM-YYYY'));
    };
    return (
         <View style={[Styles.Datapicker,Style.PaddingHorizontal]}  >
         <Text style={Styles.DatapickerInputHeadingText}>{props.handleName}</Text>
         <View style={Styles.DatapickerInputBox}>
             <TouchableOpacity onPress={() => showDateTimePicker()}>
                 <Text style={Styles.DatapickerInputText}>{dateselcet}</Text>
             </TouchableOpacity>
             <TouchableOpacity style={Style.dobView} onPress={() => showDateTimePicker()}>
                 <VectorIcon icon="AntDesign" style={{ fontSize: SF(30), color: Colors.theme_background }} name='calendar' />
             </TouchableOpacity>
         </View>
         <DateTimePicker
             isVisible={isDatePickerVisible}
             onConfirm={handleDatePicked}
             onCancel={hideDateTimePicker}
         />
     </View>
  
    )
}
export default DatePicker;