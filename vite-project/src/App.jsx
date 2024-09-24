import { useState } from 'react';
import './style/App.css';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div>
        <button onClick={() => setShow(!show)}>{show ? 'Hide Time' : 'Show Time'}</button>
      </div>
      {show && <h2>Current Time: {new Date().toLocaleTimeString()}</h2>} {/* Заголовок времени */}
    </div>
  );
}

export default App;
