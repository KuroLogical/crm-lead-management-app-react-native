import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
function ContainerComponent({
  children,
  fullScreen,
  statusBarPropStyle,
  containerPropStyle,
  linearGradient
}) {
  const { Colors } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        statusBarStyle: {
          flex: 0,
          backgroundColor: Colors.transpharent,
        },
        containerStyle: {
          flex: 1,
          backgroundColor: Colors.transpharent,
        },
        linearGradient: {
          flex: 1
        },
      }),
    [Colors],
  );
  return fullScreen ? (
    <View style={[styles.containerStyle, { ...containerPropStyle }]}>
      {children}
    </View>
  ) : (
    <View style={[styles.containerStyle, { ...containerPropStyle }]}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#E8DBFC', '#F8F9D2']}
        style={[styles.linearGradient,{...linearGradient}]}>
        <SafeAreaView
          style={[
            styles.statusBarStyle,
            { statusBarPropStyle },
          ]}
        />
        <SafeAreaView style={[styles.containerStyle, { ...containerPropStyle }]}>
          {children}
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

export default ContainerComponent;
