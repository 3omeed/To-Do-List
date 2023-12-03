import './App.css';
import Box from './Components/Box/Box';
import Input from './Components/Input/Input';

function App() {
  return (
    <div className="App">
      <div className={'container'}>
        <h1>To-Do List</h1>
        <Input />
        <Box />
      </div>
    </div>
  );
}

export default App;
