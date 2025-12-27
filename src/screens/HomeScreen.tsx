import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { vs, s } from 'react-native-size-matters'
import TopTabs from '../components/TopTabs'
import MediationCard from '../components/MediationCard'
import { dummyData } from '../data/data'

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
        <TopTabs />
        <FlatList
        data={dummyData}
        keyExtractor={item=>item.id}
        renderItem={({item})=> <MediationCard imageURL={item.image} title={item.title} date={item.date} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom:vs(16),
          justifyContent:'space-between',
        }}
          contentContainerStyle={{
            marginTop:vs(24),
            paddingBottom:vs(150),
          }}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})