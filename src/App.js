import { useEffect } from 'react';
import './App.css';



function App() {

  const tgAPI = window.Telegram.WebApp;

  useEffect(()=>{
    tgAPI.ready();
  },[])


  const onClose = ()=>{
    tgAPI.close();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>hello telegram</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default App;
