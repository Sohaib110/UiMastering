import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import { SendIcons } from '../assets/Icons'

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <SendIcons/>
    </TouchableOpacity>
  )
}

export default SendButton

const styles = StyleSheet.create({
    circle:{
        height:s(46),
        width:s(46),
        borderRadius:s(23),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1077AF',
    }
})