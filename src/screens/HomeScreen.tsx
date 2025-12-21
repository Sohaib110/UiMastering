import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs, s } from 'react-native-size-matters'

const HomeScreen = () => {
  return (
    <View style={{paddingTop:vs(50),
        paddingHorizontal:s(16),
        }}>
      <Text style={{
        fontSize:vs(20),
        color:'#1D150F',
        fontWeight:'semibold',
        marginBottom:vs(6)}} >Meditations</Text>
        <Text style={{
        color:'#2C2016',
        fontSize:vs(14),
        marginBottom:vs(16)
        }}>Lorem Ipsum is simply dummy text</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})