import './App.css';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel>
        <img src="https://images.unsplash.com/photo-1602033750341-71d8db6008a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="placeholder" />
        <img src="https://via.placeholder.com/1200x500" alt="placeholder" />
        <img src="https://via.placeholder.com/1200x500" alt="placeholder" />
      </Carousel>
    </div>
  );
}

export default App;
