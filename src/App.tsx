import React from 'react';
import './App.css';

const App: React.FC = () => {
  const [userName, setUserName] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserName(value);
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="userName">Username:</label>
        <input
          id="userName"
          placeholder="Enter your username here..."
          value={userName}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
