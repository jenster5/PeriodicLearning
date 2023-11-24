//import PeriodicTable from './assets/periodicTable.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>Periodic Learning</h1>
      <div className="card">
        <img
          src="./public/periodicTable.svg"
          alt="periodic table of elements"
          className="tableImage"
        />
        <button> Lets Learn </button>
      </div>
    </main>
  );
}

export default App;
