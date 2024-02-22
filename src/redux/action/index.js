export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload :product
    }
}

export const delItem = (product) => {
    return{
        type : "DELITEM",
        payload :product
    }
}


export const addToFavorites = (cartItem) => {
    return{
    type: "ADDTOFAV",
    payload: cartItem
}
}

export const RemFav =(cartItem) => {
    return{
        type: "REMOVEFROMFAV",
        payload: cartItem
}
}
