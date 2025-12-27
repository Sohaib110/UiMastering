import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'
import { s, vs } from 'react-native-size-matters'
import PaymentList from '../components/PaymentList'
import BankCardBox from '../components/BankCardBox'
import AddButton from '../components/AddButton'
import PayText from '../components/PayText'
import PayConfirmButton from '../components/PayConfirmButton'



const PaymentScreen = () => {
  return (
    <View style={{ flex: 1, paddingTop: vs(50), }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: vs(37) }}>
        <BackButton />
        <Text style={{ fontSize: s(17), color: '#181C2E', fontWeight: 'semibold', marginStart: s(12) }}>Payment</Text>
      </View>
      <PaymentList />
      <View style={{ paddingHorizontal: s(16) }}>
        <BankCardBox />
        <AddButton />
      </View>
      <PayText />
      <View style={{ paddingHorizontal: s(16) }}>
        <PayConfirmButton />
      </View>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})