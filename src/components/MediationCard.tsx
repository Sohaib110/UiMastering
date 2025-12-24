import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs, s } from 'react-native-size-matters'

const MediationCard = () => {
  return (
    <ImageBackground source={{uri:'https://cdn.ecuad.ca/assets/events-images/vecteezy_cute-little-boy-meditating-in-the-park-cartoon-illustration.jpg'}}
    style={styles.imageContainer}
    imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>Meditations</Text>
      </View>
      
    </ImageBackground>
  )
}

export default MediationCard

const styles = StyleSheet.create({
  imageContainer:{
    borderRadius:s(12),
    height:vs(161),
    width:s(166),
    overflow:'hidden',
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    opacity:0.7,

  },
  cardContent:{
    position:'absolute',
    left:s(10),
    bottom:vs(10),
  },
  title:{
    color:'#FFFFFF',
    fontSize:vs(12),
    fontWeight:'semibold',
  },
  overlay:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'rgba(0,0,0,0.45)',
  }

})