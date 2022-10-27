import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BeersItem = props => {

    return (

  <TouchableOpacity onPress={props.onSelect} style={styles.placeitem}>
    <Image style={styles.image} source={{ uri:props.image}} />
    <View style={styles.infocontainer}>
        <Text style={styles.title}>Review: {props.title} </Text>
        <Text  style={styles.title}> Rating: {props.rating}</Text>
        
        
    </View>


  </TouchableOpacity>

    )
}
const styles = StyleSheet.create({

placeitem: {
    borderBottomColor:'#ccc',
    borderWidth:1,
    paddingHorizontal: 32,
    paddingVertical:16,
    flexDirection:'row',
    alignItems:'center',

},
image:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 1,
},
title: {
    color:'black',
    fontSize:18,
    
},
infocontainer:{
    marginLeft:25,
    width:250,
    justifyContent:'center',
    alignItems:'flex-start',
}


})
export default BeersItem;