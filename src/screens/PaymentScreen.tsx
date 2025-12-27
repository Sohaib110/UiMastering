import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'
import { s, vs } from 'react-native-size-matters'
import PayMethodCard from '../components/PayMethodCard'



const PaymentScreen = () => {
  return (
    <View style={{flex:1,paddingTop:vs(50), paddingHorizontal:s(16), }}>
      <View style={{flexDirection:'row', alignItems:'center', marginBottom:vs(37)}}>
        <BackButton/>
        <Text style={{fontSize:s(17), color:'#181C2E', fontWeight:'semibold', marginStart:s(12)}}>Payment</Text>
      </View>
      <PayMethodCard />
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})