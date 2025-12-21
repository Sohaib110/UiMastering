import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import SendButton from './SendButton'
import SocialCircle from './SocialCircle'
import {  s, vs } from 'react-native-size-matters'

interface SocialSection{
    title:string;
    icon:React.ReactNode;
}
const SocialSection: FC<SocialSection> = ({title, icon}) => {
  return (
    <View style={styles.container}>
    
 
    <View style={styles.circle}>
        {icon}
        
    </View>
      
      <Text style={styles.text}>{title}</Text>
      <SendButton/>
      {/* <SocialCircle /> */}
      
    
    </View>
  )
}

export default SocialSection

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:s(1),
        borderBottomColor:'#E4E6E8',
        paddingBottom:vs(15),
        paddingVertical:vs(15),
    },
    text:{
        marginStart:s(14),
        flex:1,
        color:'#8083A3',
        fontSize:s(12),
    },
    circle:{
        height:s(46),
        width:s(46),
        borderRadius:s(23),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF',
        borderWidth: s(1),
        borderColor: '#E4E6E8',
    }
})