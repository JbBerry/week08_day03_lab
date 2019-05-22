
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
    default:
      return state;
  }
}

export default photosListReducer;
