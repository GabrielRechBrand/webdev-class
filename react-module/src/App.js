import './App.css';

import MovieListComponent from "./components/MovieListComponent";
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
        <MovieListComponent />
    </div>
  );
}

export default App;
