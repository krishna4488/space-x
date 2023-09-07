import './styles.css';
import './App.css';
import { Header } from './components/Header/Header';
import { Launch } from './components/Launch/Launch';

function App() {
  return (
    <div className="App">
      <Header />
      <Launch banner="https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg" title="Falconsat" launchdate="2006-03-25T10:30:00+12:00"
      description="Successful first stage burn and transition to second stage,stage burn and transition to second stage
      stage burn and transition to second stage maximum altitude 289 km, Premature engine
      maximum altitude 289 km, Premature engine maximum altitude 289 km, Premature engine maximum altitude 289 km, Premature engine
       maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage
       " />
       <Launch banner="https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg" title="Falconsat" launchdate="2006-03-25T10:30:00+12:00"
      description="Successful first stage burn and transition to second stage,stage burn and transition to second stage
      stage burn and transition to second stage maximum altitude 289 km, Premature engine
      maximum altitude 289 km, Premature engine maximum altitude 289 km, Premature engine maximum altitude 289 km, Premature engine
       maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage
       " />
    </div>
  );
}

export default App;
