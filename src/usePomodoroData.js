import {useReducer} from "react"
import POMODORO_ACTION_TYPE from "./POMODORO_ACTION_TYPE";

function usePomodoroData(){
    const INITIAL_STATE = {
        cycle: 2,
        work: 25,
        rest: 5
      }
    
      const reducer = (state, action) => {
        switch (action.type) {
          case POMODORO_ACTION_TYPE.CYCLE:
            return { ...state, cycle: action.value }
          case POMODORO_ACTION_TYPE.WORK:
            return { ...state, work: action.value }
          case POMODORO_ACTION_TYPE.REST:
            return { ...state, rest: action.value }
          default:
            return state
        }
      }
    
      
      const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
      return [state, dispatch]
}

export default usePomodoroData