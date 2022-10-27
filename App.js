import React from 'react'
import {NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeerListScreen from './components/BeerList'
import NewBeerScreen from './components/AddBeer'
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import beersReducer from './store/beers.reducer'
import {combineReducers, applyMiddleware} from 'redux'
import TopListPage from './components/TopListPage';
import MainPage from './components/MainPage';



const Stack=createNativeStackNavigator();
const rootReducer=combineReducers({
  beers:beersReducer
})

const store=createStore(rootReducer,applyMiddleware(ReduxThunk))
export default function App() {
  return (
<Provider store={store}>
    <NavigationContainer>
 <Stack.Navigator initialRouteName='MainPage'
 screenOptions={{
  headerTitleAlign:'center',
  headerStyle: {
    backgroundColor:'gold',
  },
  headerTintColor: '#fff',
  headerTitleStyle:{
    fontWeight: 'italic', 
    
  }, 
  
  

  
 }}>

<Stack.Screen name="BeerList" component={BeerListScreen} options = {({navigation, route }) => ({title:"Lists of beer"})}/>
<Stack.Screen name="NewBeer" component={NewBeerScreen} options = {{title:"Add your beer"}}/>
<Stack.Screen name="TopListPage" component={TopListPage} options = {({navigation, route }) => ({title:"List of most captured beers"})}/>
<Stack.Screen name="MainPage" component={MainPage} options =  {({title:"BeerTappd"})}/>
</Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}



