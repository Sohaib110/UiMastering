import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'

const PayText = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: s(20) }}>
            <Text style={{ marginStart: s(16), fontSize: s(14), color: 'gray' }}>Total:</Text>
            <Text style={{ marginStart: s(6), fontSize: s(20), color: 'black' }}>96$</Text>
        </View>

    )
}

export default PayText

const styles = StyleSheet.create({})