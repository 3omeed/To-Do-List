import './App.css';
import Input from './Components/Input/Input';

function App() {
  return (
    <div className="App text-center min-h-100vh flex flex-col items-center content-start text-var('accent')">
      <div className="container  flex flex-col mx-0 my-16 w-5/6 md:w-1/2 h-auto min-h-96 pb-16 border-4 border-accent  rounded-xl">
        <h1 className="my-4 font-bold text-3xl text-accent ">To-Do List</h1>
        <Input />
      </div>
    </div>
  );
}

export default App;
