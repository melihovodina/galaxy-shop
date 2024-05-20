import {BrowserRouter} from "react-router-dom";
import AppRouter from './router/AppRouter';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppRouter/>
      </div>
    </BrowserRouter> 
  );
}

export default App;