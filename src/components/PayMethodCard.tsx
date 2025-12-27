import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CashIcon } from '../assets/Icons'
import { s, vs} from 'react-native-size-matters'

const PayMethodCard = () => {
  return (
    <View style={{width:s(85)}}>
        <View style={styles.card}>
        <CashIcon/>
        </View>
      <Text style={styles.label}>Cash</Text>
    </View>
  )
}

export default PayMethodCard

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#F0F5FA',
        borderRadius:s(10),
        width:s(85),
        height:vs(72),
        justifyContent:'center',
        alignItems:'center',
    },
    label:{
      fontSize:s(14),
      color:'#464E57',
      textAlign:'center',
        marginTop:vs(4),

    }
})