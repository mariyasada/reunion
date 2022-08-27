export const filterReducer=(state,action)=>{
    switch (action.type) {
        case "SORT_BY_TYPE":
            return{...state,sortBy:action.payload}
    
        case "ADD_TO_FAVORITE":
            return {...state,favorites:[...state.favorites,{...action.payload}]}
        
        case "SEARCH_BY_QUERY":
          return {...state,searchByQuery:action.payload} 

        case "SEARCH_BY_FORM":
            return {...state,searchByForm:{...state.searchByForm,...action.payload}}  
           
       default:
            return state;
    }
}