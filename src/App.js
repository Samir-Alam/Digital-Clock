// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
      time = new Date().toLocaleTimeString();
      setCtime(time);
  };

  setInterval(UpdateTime, 1000)

  return(
      <div className='body'>
        <header className='header'>
            <h1 className='text'>Digital Clock</h1>
        </header>
        
        <main>
            <div className="container">
                <h1 className='time'> {ctime} </h1>
            </div>
        </main>
      </div>
  );
}

export default App;