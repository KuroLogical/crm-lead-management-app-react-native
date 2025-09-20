import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, Appearance, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import images from '../../index';
import { SwiperStyle } from '../../styles';
import { Button } from '../../components';
import {  SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../routes';
import {  Colors } from '../../utils';

const IntroSlider = (props) => {
  const { navigation } = props;
  const sliderRef = React.useRef(null);
  const slides = [
    {
      key: 'one',
      title: 'IntroSlider_title_1',
      text: 'IntroSlider_text_1',
      image: images.Swiper_1,
    },
    {
      key: 'two',
      title: 'IntroSlider_title_2',
      text: 'IntroSlider_text_2',
      image: images.Swiper_2,
    },
    {
      key: 'three',
      title: 'IntroSlider_title_3',
      text: 'IntroSlider_text_3',
      image: images.Swiper_3,
    }
  ];

  const { t } = useTranslation();

  const colorScheme = Appearance.getColorScheme();
  const SwiperStyles = SwiperStyle;
  const _renderItem = ({ item, index }) => {
    const isLastSlide = index === slides.length - 1;
    return (
      <ImageBackground source={images.shap1} style={SwiperStyles.Container}>
        <View style={SwiperStyles.TopContainer}>
          <Image source={item.image} resizeMode='center' style={SwiperStyles.Image} />
        </View>
        <View style={SwiperStyles.BottomContainer}>
          <View style={SwiperStyles.BottomContainertitleView}>
            <Text style={SwiperStyles.BottomContainertitle}>{t(item.title)}</Text>
            <Text >{t(item.text)}</Text>
          </View>
          <TouchableOpacity
            style={SwiperStyles.ArrowButtonTwo}
            onPress={() => isLastSlide ? _onDone() : sliderRef.current.goToSlide(index + 1)} >
            {isLastSlide ?
              <View style={{ width: '100%' }}>
                <Button buttonTextStyle={SwiperStyles.buttonTextStyle} buttonStyle={SwiperStyles.buttonStyle} onPress={() => navigation.navigate(RouteName.LANGUAGESCREEN)} title={t("GET STARTED")} />
              </View>
              :
              <View style={{ width: '100%' }}>
                <Button buttonTextStyle={SwiperStyles.buttonTextStyle} buttonStyle={SwiperStyles.buttonStyle} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} title={t("SKIP")} />
              </View>
            }
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  const _onDone = () => {
  };
  const _renderPagination = (activeIndex) => {
    return (
      <View style={{ position: 'absolute', bottom: SH(35), left: SH(20), right: 0, flexDirection: 'row', justifyContent: 'flex-start' }}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              SwiperStyles.DotStyle,
              i === activeIndex ? SwiperStyles.activeDot : SwiperStyles.Inactive
            ]}
          />
        ))}
      </View>
    );
  };
  return (
    <>
      <StatusBar backgroundColor={Colors.theme_background} />
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        showNextButton={false}
        showDoneButton={false}
        renderPagination={_renderPagination}
        ref={sliderRef}
      />
    </>
  );
};

export default IntroSlider;
