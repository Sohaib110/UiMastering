import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import { SendIcons } from '../assets/Icons'

const SocialCircle = () => {
  return (
    <View style={styles.circle}>
      
    </View>
  )
}

export default SocialCircle

const styles = StyleSheet.create({
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