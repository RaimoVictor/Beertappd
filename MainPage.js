import React from "react";
import {useFocusEffect} from "@react-navigation/native";
import { useState } from "react";
import {Text,View,Button,ActivityIndicator,FlatList,TouchableOpacity, Platform} from 'react-native'

function MainPage({navigation}) {


return( 
    
         <View style ={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'#FCEF0'}}>
            <Text style ={{marginBottom:20 , fontSize: 30, fontWeight:'italic'}}> Welcome to Beertappd!</Text>
            <View> 
            <Button title="Go to our Recensions" onPress={()=> navigation.navigate("BeerList")} />
    <Button title=" Most picked beers " onPress={()=> navigation.navigate("TopListPage")} /> 
    <Button title="Add your beer" onPress={()=> navigation.navigate("NewBeer")}  />
            
    </View>
   
    



   
    
    </View>
)


}







export default MainPage;