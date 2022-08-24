import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This code is mad by Katharina Ramer and is open-sourced. View it on{" "}
          <a
            href="https://github.com/supertramp222/react-weather-app-3.0"
            target="_blank"
            rel="noreferrer"
          >
            GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
