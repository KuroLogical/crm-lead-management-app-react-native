import React, { useState, useMemo } from "react";
import { Text, View, TouchableOpacity, ScrollView, Appearance } from "react-native";
import { Sidemenu } from '../../styles';
import { RouteName } from '../../routes';
import { ConfirmationAlert, Spacing, VectorIcon } from '../../components';
import { Colors, SF, darkTheme, lightTheme } from '../../utils';
import Translation from '../../Language/i18n';
import { useSelector } from "react-redux";

const CustomSidebarMenu = (props) => {
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  var alertdata = {
    'logout': Translation("Are_You_Sure_logout"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGINFIRSTSCREEN);
  }
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };
  const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  const Colors = isDarkMode ? darkTheme : lightTheme;
  const Sidemenus = useMemo(() => Sidemenu(Colors), [Colors]);
  // const isDarkMode = useSelector(state => state.DarkReducer.isDarkMode);
  // const Colors = isDarkMode ? darkTheme : lightTheme;
  // const SettingsScreenStyles = useMemo(() => SettingsScreenStyle(Colors), [Colors]);
  // const colorScheme = Appearance.getColorScheme();
  // const Sidemenus = useMemo(() => Sidemenu(colorScheme === 'dark' ? darkTheme : lightTheme), [colorScheme === 'dark' ? darkTheme : lightTheme]);

  return (
    <ScrollView>
      <View style={Sidemenus.customslidebarmenu}>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.HOME_SCREEN)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="AntDesign" size={SF(25)} name="home" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Home")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.LEADTAB)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="AntDesign" size={SF(25)} name="team" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Leads")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.DEALSTAB)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="FontAwesome" size={SF(18)} name="handshake-o" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Deals")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.CONTACTSTAB)}>
          <VectorIcon style={Sidemenus.VectorIcon} name="phone" icon="Feather" size={SF(25)} color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Contacts")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.ACCOUNTSSCREEN)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="AntDesign" size={SF(25)} name="exclamationcircleo" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Costomer_information")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.TASKSSCREEN)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="Octicons" size={SF(25)} name="tasklist" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Tasks")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.CALL)}>
          <VectorIcon style={Sidemenus.VectorIcon} name="phone" icon="Feather" size={SF(25)} color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Calls")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.MEEETINGSCREEN)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="FontAwesome" size={SF(22)} name="object-group" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Meetings")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.ADDMEETING)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="FontAwesome" size={SF(22)} name="object-ungroup" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Add_meeting")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.ADDTASK)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="MaterialIcons" size={SF(25)} name="add-task" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Add_task")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.ADDCALL)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="MaterialIcons" size={SF(25)} name="add-call" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Add_call")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.ADDLEADS)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="AntDesign" size={SF(25)} name="adduser" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Add_Lead")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.SETTING_SCREEN)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="AntDesign" size={SF(25)} name="setting" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Settings")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.REVIEWS_SCREEN)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="Fontisto" size={SF(25)} name="preview" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Reviews")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.NOTIFICTION_SCREEN)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="Ionicons" size={SF(25)} name="notifications-outline" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Notification")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => Onpressfunction(RouteName.PRIVACY_POLICY_SCREEN)}>
          <VectorIcon style={Sidemenus.VectorIcon} icon="AntDesign" size={SF(25)} name="questioncircleo" color={Colors.theme_background} />
          <Text style={Sidemenus.hometextstyle}>{Translation("Privacy_Policy")}</Text>
        </TouchableOpacity>
<Spacing space={10}/>
        <TouchableOpacity style={Sidemenus.flexrowset} onPress={() => {
          setAlertVisible(true);
          setAlertMessage(alertdata.logout);
        }}>
          <VectorIcon
            icon="Entypo" name="log-out" color={Colors.theme_background} size={SF(25)} />
          <Text style={Sidemenus.hometextstyle}>{Translation("logout_text")}</Text>
        </TouchableOpacity>
        <Spacing space={20}/>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPressCancel={() => setAlertVisible(!alertVisible)}
          onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
          cancelButtonText={Translation("Cancel_Button")}
          buttonText={Translation("Ok")}
          buttonStyle={{ width: '45%' }}
        />
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;

