import {createStore} from 'redux'




function CounterReducer(state = 0, action) {
    switch(action.type) {
      case "Increment":
        return state + action.data
      case "Decrement":
        return state - action.data
      case "Reset":
        return state =0
      default:
        return state
    }
  }

  const mainstore = createStore(CounterReducer);
  mainstore.subscribe(() => console.log(mainstore))
  export default mainstore
