import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, darkTheme, lightTheme } from '../../utils';
import { Input } from 'react-native-elements';
import { useSelector } from 'react-redux';

function Inputs({
  title,
  placeholder,
  titleStyle,
  inputStyle,
  onChangeText,
  value,
  inputprops,
  inputType,
  autoFocus,
  secureTextEntry,
  maxLength,
  leftIcon = {},
  rightIcon = {},
  errorMessage = "",
  disabled = false,
  required = false,
  containerStyle,
  onEndEditing,
  inputContainerStyle,
  numberOfLines,
  textAlignVertical
}) {
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  // const Colors = Colors;
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: { width: '100%', ...containerStyle, marginBottom: SH(0), },
        inputContainerStyle: {
          borderBottomWidth: SH(0),
          width: "100%",
          ...inputContainerStyle
        },
        input_style: {
          width: '100%',
          borderColor: Colors.light_gray_text_color,
          fontSize: SF(16),
          fontWeight: '600',
          marginBottom: SH(0),
          fontFamily: Fonts.Poppins_Medium,
          color: Colors.black_text_color,
          paddingVertical: SH(8),
          paddingHorizontal: SH(20),
          borderRadius: SH(10),
          borderWidth: SH(0.5),
          backgroundColor:Colors.white_text_color,
          ...inputStyle,
        },
        labelStyle: {
          width: '100%',
          fontSize: SF(18),
          color: Colors.black_text_color,
          fontFamily: Fonts.Poppins_Medium,
          paddingHorizontal: SW(3),
          ...titleStyle,
          fontWeight: '500',
          paddingVertical: SH(2),
        },
        placeholderStyle: {
          fontSize: SF(19),
          color: Colors.theme_background,
          fontFamily: Fonts.Poppins_Medium
        },
        errorStyle: {
          color: Colors.theme_background,
          fontFamily: Fonts.Poppins_Regular,
          margin:0,
          height:0,
        },
      }),
    [title, titleStyle, inputStyle, Colors],
  );
  return (
    <View style={styles.container}>
      <Input
        label={title + (required ? "*" : "")}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        leftIcon={leftIcon}
        placeholderTextColor={Colors.gray_text_color}
        rightIcon={rightIcon}
        numberOfLines={numberOfLines}
        textAlignVertical= {textAlignVertical}
        errorMessage={errorMessage}
        disabled={disabled}
        autoFocus={autoFocus}
        keyboardType={!inputType ? 'default' : inputType}
        secureTextEntry={secureTextEntry}
        value={value}
        selectionColor={Colors.theme_background}
        maxLength={maxLength}
        {...inputprops}
        errorStyle={styles.errorStyle}
        inputStyle={styles.input_style}
        labelStyle={styles.labelStyle}
        inputContainerStyle={styles.inputContainerStyle}
        onEndEditing={onEndEditing}
        
      />
    </View>
  );
}

export default Inputs;
