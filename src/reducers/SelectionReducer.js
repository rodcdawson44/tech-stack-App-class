
export default (state ={}, action) => {

   switch(action.type){
     case 'select_library':
       return {...state, ...action.payload}


     default:
       return state;
   }

};
