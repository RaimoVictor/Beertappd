import React from 'react'
import { View,Text,StyleSheet,Button,FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import BeersItem from './beerItems'

const BeerListScreens = ({navigation}) =>{


  
  const beers=useSelector(state=>state.beers.beers)

    React.useLayoutEffect(() => {
        
        navigation.setOptions({
          headerRight: () => (
            <Button title="Add Beer" color="#gold" onPress={() => (navigation.navigate('NewBeer')) }/>
          ),
        });
      }, [navigation]);



    return ( 


<FlatList data={beers} keyExtractor={item =>item.id} renderItem={itemData=> <BeersItem  image={itemData.item.imageUri} title={itemData.item.title}  rating ={itemData.item.rating}/>}/>





    )
}
const styles=StyleSheet.create({

  


});
export default BeerListScreens;