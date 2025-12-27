import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'


const PayConfirmButton = () => {
    return (
        <TouchableOpacity style={{
            backgroundColor: "#FF7622",
            borderRadius: s(10),
            paddingVertical: vs(15),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: vs(16),
            flexDirection: 'row',

        }}>
            <Text style={{ color: '#FFF', fontSize: s(14), fontWeight: 'semibold' }}>Pay & Confirm</Text>
        </TouchableOpacity>
    )
}

export default PayConfirmButton

const styles = StyleSheet.create({})