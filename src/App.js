import './App.css';
import Pomodoro from './Pomodoro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pomodoro Timer
        </h1>
      </header>
      <div>
          {/* cycle count dropdown */}
          {/* work time dropdown */}
          {/* rest time dropdown */}
          {/* start button */}
      </div>
      <div>
        {/* open a modal */}
        {/* run the pomodoro for x cycles */}
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
