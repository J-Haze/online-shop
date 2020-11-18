 export default function posts(state = [], action) {
   let newState = [...state];
   switch (action.type) {
       case "REDUX_SIZE":
           console.log("other redux")
    //    newState[action.size].likes++;
       return newState;
     default:
       return state;
   }
 }

export default posts;
