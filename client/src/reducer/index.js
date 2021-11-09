const initialState = {
  dogs: [], 
  allDogs: [], 
  temperaments: [],
  detail: [],
};



//console.log("estado inicial", initialState.dogs);
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case "GET_NAME_DOGS":
        return{
        ...state,
        dogs: action.payload,
       
      };

    case "FILTER_BY_TEMPERAMENTS":
      const allDogs = state.allDogs;
      const temperamentFiltered =
        action.payload === "All"
          ? allDogs
          : allDogs.filter(
              (el) =>
                el.temperament.split(", ").find((e) => e === action.payload)
            );
      //console.log("filtro temperamentos",allDogs)
      return {
        ...state,
        dogs: temperamentFiltered,
      };

    case "FILTER_CREATED":
        const allDogsCreated = state.allDogs;
        const createdFilter = action.payload === "created" ? allDogsCreated.filter(e => e.createInDb) : 
        allDogsCreated.filter(e => !e.createInDb) ;
        return {
        ...state,
        dogs: action.payload === 'All' ? allDogsCreated : createdFilter 
      };

    case "POST_DOG":
      return{
        ...state
      };

    case "GET_TEMPERAMENTS":
      return{
        ...state,
        temperaments: action.payload
      }

    case "GET_DETAILS":
      return{
        ...state,
        detail: action.payload
      }

    case "ORDER_BY_NAME":
        let sortedArr = action.payload === 'asc' ? 
        state.dogs.sort(function (a, b){
            if (a.name > b.name){
                return 1;
            }
            if (b.name > a.name){
                return -1;
            }
            return 0;
        }) :
        state.dogs.sort(function(a, b){
            if (a.name > b.name){
                return -1;
            }
            if (b.name > a.name){
                return 1;
            }
            return 0;
        })
        return{
        ...state,
        dogs: sortedArr
        };
        
        case "ORDER_BY_WEIGHT":
                
        let sortedArrWeight = action.payload === 'weightasc' ? 
            state.dogs.sort(function (a, b){
                return b.weight_min - a.weight_min;
            }) :
            state.dogs.sort(function(a, b){
                return a.weight_min - b.weight_min;
            })
            return{
            ...state,
            dogs: sortedArrWeight
            }
    default:
      return state;
  }
}

export default rootReducer;
