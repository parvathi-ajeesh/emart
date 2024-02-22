

const initialState = {
    favorites: []
};

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTOFAV":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };


        case "REMOVEFROMFAV":
            return{
                ...state,
                favorites:state.favorites.filter(cartItem => cartItem.id !== action.payload)
            };



        default:
            return state;
    }
};

export default favoritesReducer;