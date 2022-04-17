import './App.css';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel>
        <img src="https://images.unsplash.com/photo-1602033750341-71d8db6008a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt="img" />
        <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt="img" />
        <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt="img" />
        <img src="https://images.unsplash.com/photo-1584345604325-f5091269a0d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt="img" />
        {/* <img src="https://via.placeholder.com/1200x500" alt="placeholder" /> */}
      </Carousel>
    </div>
  );
}

export default App;
