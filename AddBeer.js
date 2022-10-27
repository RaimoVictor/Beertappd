import React,{useState} from 'react'
import { View,Text,StyleSheet, ScrollView, TextInput, Button, Alert,FlatList} from 'react-native'
import ImageSelector from './imageSelector'
import { useDispatch } from 'react-redux'
import * as beersActions from '../store/beers-actions'
import { useFocusEffect } from '@react-navigation/native'
import SelectDropdown from 'react-native-select-dropdown'







const AddBeer = ({navigation}) =>{
    const dispatch=useDispatch()
    // const[ useBeer, setUseBeer] = useState()
    // const BeerHandler= (beerdata)=>{
    //     setUseBeer(beerdata)
    // }
    

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



const[titleValue,settitleValue]=useState('')
const[selectedImage,setselectedImage]=useState(null)
const[ratingValue,setRatingValue]=useState('')


const onImageTakenHandler=(path) =>{
    setselectedImage(path)
}
const titleChangeHandler=(text)=>{
    settitleValue(text)
}
const ratingChangeHandler=(text)=>{
    setRatingValue(text)
}

const saveBeerHandler=()=>{
    dispatch(beersActions.addBeer(titleValue,selectedImage,ratingValue, ))
    navigation.navigate('BeerList')


    // const requestOptions = {
    //     method: 'POST', 
    //     headers: {'Content-Type': 'application/json'}, 
    //     body: JSON.stringify({ beer:beerdata })
    // };
    // const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2:5162/api/Beers': 'http://localhost:5162/api/Beers';

    // const postBeer = async () => {
    //     try {
    //         await fetch (
    //          baseUrl, requestOptions)
    //          .then(response => {
    //             response.json()
    //             .then(data =>{
    //                 Alert.alert("Beer saved in: ",
    //                 data.createdAt);
    //             });
    //          })

            
    //         }
    //     catch(error){
    //         console.error(error)
    //     }
      
    // }
}
    return ( 
        
    <View >
    <SelectDropdown data={beer} 
    KeyExtractor={item => item.id.toString()}
    renderItem={({item}) => 
    
    
    
    {item.name} 
    
    
    }>
    
    
    
    
    </SelectDropdown>
    


    <View/>
   


    




    <ScrollView style={styles.form}> 

<View>
{beer.map((beer) => {
           
              <View>
               <Text style={styles.item}>{beer.name}</Text>
               </View>

    

            
})}
</View>
 

<ImageSelector onImageTaken={onImageTakenHandler}/>

<View style={styles.form}>

<Text style={styles.label}>
        What did you thought about your beer? Leave a note! 
</Text>
<TextInput style={styles.inputText} onChangeText={titleChangeHandler} value ={titleValue}  />
<Text style={styles.label}>
        Enter your rating for your beer between 1-10. 
</Text>
<TextInput style={styles.inputText} onChangeText={ratingChangeHandler} value ={ratingValue}  />

<Button title="Save Beer" style={styles.button} onPress={saveBeerHandler}/>
</View>
 </ScrollView>
 </View>
    )
    
}

const styles=StyleSheet.create({

form: {
    margin:20,
    
},
label:{
    fontSize:25, 
    marginBottom: 17,
},
inputText:{
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    marginBottom:15,
    paddingHorizontal:3,
    paddingVertical:4,
    margin:20
},
button:{
backgroundcolor:"gold",
fontStyle:"italic"


}


});
export default AddBeer;