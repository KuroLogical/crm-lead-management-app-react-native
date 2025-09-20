import { StyleSheet } from 'react-native';
import { SF, Fonts, SH, widthPercent, heightPercent, hexToRgba, Colors } from '../../utils';

// export default HomeTabStyle = (Colors) => StyleSheet.create({
export default StyleSheet.create({
  Container: {
    // backgroundColor: Colors.theme_background,
    height: '100%',
    width: '100%',
  },
  TopContainer: {
    width: "100%",
    height: '70%'
  },
  BottomContainer: {
    borderTopLeftRadius:SH(50),
    borderTopRightRadius:SH(50),
    width: "100%",
    height: '30%',
    // backgroundColor: "#3d3ff2",
    paddingHorizontal:SH(20)
  },
  BottomContainertitleView:{
    width:'100%',
    paddingHorizontal:SH(20),
    position:'absolute',
    bottom:SH(70)
  },
  BottomContainertitle:{
    fontSize:SF(30),
    fontFamily:Fonts.Poppins_Bold,
    color:Colors.white_text_color
  },
  Image: {
    width: "100%",
    height: '100%'
  },
  DotStyle: {
    width: SH(20),
    height: SH(10),
    borderRadius: SH(200),
    backgroundColor: Colors.white_text_color,
  },
  activeDot: {
    width: SH(40),
    height: SH(10),
    marginRight: SH(10),
    borderRadius: SH(200),
    backgroundColor: Colors.white_text_color
  },
  Inactive: {
    width: SH(10),
    height: SH(10),
    marginRight: SH(10),
    borderRadius: SH(200),
    backgroundColor: "#3d3ff2",
    borderWidth: SH(2),
    borderColor: Colors.white_text_color
  },
  buttonStyle: {
    backgroundColor: 'yellow',
    borderRadius:SH(200)
  },
  ArrowButtonTwo: {
    position: 'absolute',
    bottom: SH(20),
    right: SH(20)
  },
  buttonTextStyle:{
    color:Colors.black_text_color
  },
 
});