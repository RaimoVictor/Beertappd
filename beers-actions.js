export const ADD_BEER ='ADD_BEER'

export const addBeer = (title,image,rating) => {
    return {type: ADD_BEER, beerData: {title:title, image:image, rating:rating}}
}