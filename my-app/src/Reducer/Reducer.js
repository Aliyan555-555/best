const SongReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        isLoading:true,
        isError:false,
        Songs:[]
        
      };
      case "GET_DATA":
        return {
            isLoading:false,
          isError:false,
          Songs:action.payload,
        };
       
        

    default:
      return state;
  }
  return state;
  
};
export default SongReducer;
