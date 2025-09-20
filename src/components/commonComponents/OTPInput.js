import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Colors, hexToRgba, SH } from '../../utils';

const CustomOtpInput = ({ numberOfInputs = 6 }) => {
    const [otp, setOtp] = useState(Array(numberOfInputs).fill('')); // Initialize empty state
    const inputRefs = useRef([]);

    const handleInputChange = (text, index) => {
        if (text.length > 1) return; // Prevent entering more than one character
        const newOtp = [...otp];
        newOtp[index] = text;

        setOtp(newOtp);

        // Move to the next input if not the last one and input is not empty
        if (text && index < numberOfInputs - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleInputDelete = (index) => {
        if (index >= 0) {
            const newOtp = [...otp];
            newOtp[index] = ''; // Clear current index

            setOtp(newOtp);

            // Move focus to the previous input if not the first one
            if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    return (
        <View style={Otpstyle.CustomeInputView}>
            {Array.from({ length: numberOfInputs }).map((_, index) => (
                <View key={index} style={Otpstyle.CustomeInputContainer}>
                    <TextInput
                        style={Otpstyle.CustomeInput}
                        value={otp[index]}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        onChangeText={(text) => handleInputChange(text, index)}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                                handleInputDelete(index);
                            }
                        }}
                        accessibilityLabel={`OTP input ${index + 1}`}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
            ))}
        </View>
    );
};

export default CustomOtpInput;

const Otpstyle = StyleSheet.create({
    CustomeInputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    CustomeInputContainer: {
        backgroundColor: hexToRgba(Colors.white_text_color, 1),
        borderRadius: SH(10),
        borderColor: Colors.theme_background,
        borderWidth: SH(0.5),
        marginHorizontal: SH(5),
    },
    CustomeInput: {
        width: SH(40),
        height: SH(40),
        textAlign: 'center',
        fontSize: SH(18),
        color: Colors.black_text_color,
        paddingVertical: 0,
    },
});
