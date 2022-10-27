import  usePomodoroData from "./usePomodoroData"
import './App.css';
import Pomodoro from './Pomodoro';
import Dropdown from "./Dropdown";

function App() {

const [state, dispatch] = usePomodoroData()
  
  const cycleOptions = {
    name: "Cycles",
    values: [2, 3, 4, 5],
    type: "CYCLE"
  }

  const workOptions = {
    name: "Work",
    values: [25, 30, 40, 45],
    type: "WORK"
  }

  const restOptions = {
    name: "Rest",
    values: [5, 10, 15],
    type: "REST"
  }

  const handleStart = () => {
    dispatch({type: "CYCLE"})
    console.log(state)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pomodoro Timer
        </h1>
      </header>
      <div>
        {/* cycle count dropdown */}
        <Dropdown options ={cycleOptions} dispatch={dispatch}/>

        {/* work time dropdown */}
        <Dropdown options ={workOptions} dispatch={dispatch}/>

        {/* rest time dropdown */}
        <Dropdown options ={restOptions} dispatch={dispatch}/>

      </div>
        {/* start button */}
      <button onClick={handleStart}>Start</button>
      
      <div>
        {/* open a modal */}
        {/* run the pomodoro for x cycles */}
        <Pomodoro />
      </div>
    </div>
  );
}



export default App;
