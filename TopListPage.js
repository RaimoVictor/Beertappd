import React from "react";
import {useFocusEffect} from "@react-navigation/native";
import { useState } from "react";
import {Text,View,ActivityIndicator,FlatList,TouchableOpacity, Platform} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';

function TopListPage({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const[beer, setBeer] = useState([]);
    const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2:5162/api/Beers': 'http://localhost:5162/api/Beers';

    useFocusEffect(
        React.useCallback(()=>{
                if (isLoading == true)
                {
                    fetch(baseUrl)
                    .then (response=>response.json())
                    .then(data=>{
                        setLoading(false)
                        setBeer(data)
                    })
                    .catch(error => {
                        console.error(error);
                    });
                }

            },[])
        
        
    )

console.log(beer)
return(

<View style ={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'#FCEF0'}}>
    <Text style ={{marginTop: 30, fontSize: 40 , color: 'black'}}> Most reviewed beers</Text>
        
  
        
        

{isLoading == true? <ActivityIndicator size="large" color ="#00ff00" /> : 
(

    <FlatList data={beer} KeyExtractor ={item => item.id.toString()}
    renderItem={({item}) => 

    <TouchableOpacity onPress={()=>navigation.navigate('TopListPage', {beer: item})}>

        <Text style={{fontSize:15, marginTop:20}}> Name: {item.name} Type: {item.type} Percent: {item.percent} </Text>

       
    </TouchableOpacity>

    


} />

    






)}
</View>
);
}


export default TopListPage;