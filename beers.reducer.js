import { ADD_BEER } from "./beers-actions";
import Beer from '../models/beer'

const initialState ={
    beers:[]
};
export default (state = initialState, action ) => {
    switch(action.type){
  case ADD_BEER:
    const NewBeer = new Beer(new Date().toString(),action.beerData.title, action.beerData.image, action.beerData.rating)
    return {
        beers:state.beers.concat(NewBeer)

    }
}
    return state;
    
}