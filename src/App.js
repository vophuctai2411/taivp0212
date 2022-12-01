import logo from "./logo.svg";
import "./App.css";
import Header from "./containers/header";
import WelcomeSection from "./containers/welcomeSection";

function App() {
  return (
    <div className="background">
      <Header />
      <WelcomeSection />
    </div>
  );
}

export default App;
