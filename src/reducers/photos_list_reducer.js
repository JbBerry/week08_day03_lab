
const photosListReducer=(state,action)=>{
  switch (action.type) {
    case 'FAVOURITE':
      return {...state, photosData: state.photosData.map((element)=>{
        if(action.id===element.id){
          return {...element, liked: !element.liked}
        }
        return element;
      })
    }
    case 'FILTER':
      return{...state, filterCategory:action.category}
    default:
      return state;
  }
}

export default photosListReducer;
