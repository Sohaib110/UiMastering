import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import { FC } from 'react'
import { vs, s } from 'react-native-size-matters'
import { VideoIcon } from '../assets/Icons'



const PhoneWidth = Dimensions.get('window').width;
const CardWidth = (PhoneWidth - s(16)*3) / 2; 

interface MediationCardProps{
  imageURL:string;
  title:string;
  date:string;
}

const MediationCard:FC<MediationCardProps> = ({imageURL, title, date}) => {
  return (
    <ImageBackground source={{uri:imageURL}}
    style={styles.imageContainer}
    imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection:"row", alignItems:'center'}}>
         <VideoIcon />
         <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
      
    </ImageBackground>
  )
}

export default MediationCard

const styles = StyleSheet.create({
  imageContainer:{
    borderRadius:s(12),
    height:vs(140),
    width:CardWidth,
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
  },
  dateText:{
    color:'#FFFFFF',
    fontSize:vs(12),
    marginStart:s(7),
  },
  liveBadge:{
    backgroundColor:'#E41111',
    height:vs(22),
    width:s(39),
    borderRadius:s(90),
    position:'absolute',
    top:vs(7),
    right:s(10),
    justifyContent:'center',
    alignItems:'center',
    
  },
  liveText:{
    color:'#FFFFFF',
    fontSize:vs(11),
    fontWeight:'semibold',
  }

})