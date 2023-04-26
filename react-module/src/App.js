import './App.css';
import sunIcon from './assets/sun.png';
import CalculatorComponent from './components/CalculatorComponent';
import FormComponent from "./components/FormComponent";
function App() {

    const toggleThene = () => {
        const body = document.body;
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
        } else {
            body.classList.add("dark-theme");
        }
    }

  return (
    <div className="app">
        <div className="theme-toggle button" onClick={toggleThene}>
        </div>
        <FormComponent />
    </div>
  );
}

export default App;
