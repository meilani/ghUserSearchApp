import { useState } from 'react';
import Header from './components/Header';

import './App.scss';


function App() {
  const [theme, setTheme] = useState("dark")

  let appTheme = (theme === "dark") ? "App darkTheme" : "App lightTheme"

  return (
    <div className={appTheme}>
      <div className="app-container">
        <Header theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;
