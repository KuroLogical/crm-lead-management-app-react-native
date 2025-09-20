import { StyleSheet } from 'react-native';
import { SF, Fonts, SH, widthPercent, heightPercent, hexToRgba, Colors } from '../../utils';

export default AddLeadStyle = (Colors) => StyleSheet.create({
// export default StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white_text_color
  },
  PaddingHorizontal:{
    paddingHorizontal:SH(20)
  },
  AddleadImageView: {
    width: '100%',
    height: SH(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  AddleadImageView2: {
    width: SH(150),
    height: SH(150),
  },
  AddleadImage: {
    width: SH(150),
    height: SH(150),
  },
  AddleadIcon:{
    position:'absolute',
    padding:SH(10),
    backgroundColor:Colors.white_text_color,
    borderRadius:SH(100),
    borderColor:Colors.theme_background,
    borderWidth:1,
    bottom:SH(10),
    right:SH(10)

  },
  AddleadFormView:{
    width:'100%',
    paddingHorizontal:SH(5)

  },
  AddleadTextTitle:{
    fontSize:SF(23),
    color:Colors.black_text_color,
    fontFamily:Fonts.Poppins_Bold,
    paddingHorizontal:SH(20),
    width:'100%',
    textAlign:'center'
  },
  AbsoluteButton:{
    position:'absolute',
    width:'100%',
    paddingHorizontal:SH(20),
    bottom:0,
    paddingBottom:SH(20),
    paddingTop:SH(10),
    backgroundColor:Colors.white_text_color
  }
});