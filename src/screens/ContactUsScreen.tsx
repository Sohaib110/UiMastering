import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserAvatar from '../components/UserAvatar'
import BackButton from '../components/BackButton'
import { vs, s } from 'react-native-size-matters'
import SocialSection from '../components/SocialSection'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';





const ContactUsScreen = () => {
  return (
 <View  style={{marginTop: vs(50), paddingHorizontal:s(20),}}>
    <View  style={styles.header}>
    <BackButton/>
    <UserAvatar/>
   
    </View>
    <Text style={styles.screenTitle}>Contact Us</Text>
    <View style={styles.socialContainer}>
      <Text style={styles.socialTitle}>Social Media Platforms</Text>
    <SocialSection icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />} title="Whatsapp" />
    <SocialSection icon={<AntDesign name="x" size={24} color="#178AD9" />}  title="X" />
    <SocialSection icon={<FontAwesome name="instagram" size={24} color="#178AD9" />}  title="Instagram"/>
    <SocialSection icon={<FontAwesome name="snapchat-ghost" size={24} color="#178AD9" />}  title="Snapchat"/>
    <SocialSection icon={<FontAwesome5 name="tiktok" size={24} color="#178AD9" />} title="Tik Tok"/>
    </View>
 </View>   
  )
}

export default ContactUsScreen

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
       
    },
    socialContainer:{
      backgroundColor:'#F5F5FA',
      borderRadius:s(14),
      paddingHorizontal:s(18),
      paddingVertical:vs(15),
      marginTop:vs(22),
    },
    socialTitle:{
      fontSize:s(16),
      fontWeight:'semibold',
      color:'#000',
      marginBottom:vs(10),
    },
    screenTitle:{
      fontSize:s(30),
      fontWeight:'semibold',
      color:'#000',
      marginTop:vs(22),
      marginStart:s(19),
    }
})