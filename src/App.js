import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./Components/Auth/AuthForm";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import PokeList from "./Components/Pages/PokemonData/PokeList";
import PokeData from "./Components/Pages/PokemonData/PokeData";
import { useSelector } from "react-redux";
import Redirect from "./Components/Pages/RedirectPage/Redirect";
import Welcome from "./Components/Pages/WelcomePage/Welcome";

function App() {
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

  return (
    <div className={styles.body}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Welcome /> : <AuthForm />} />
          {isLoggedIn && <Route path="/pokelist" element={<PokeList />} />}
          {isLoggedIn && (
            <Route path="/pokelist/:name" element={<PokeData />} />
          )}
          <Route path="*" element={<Redirect />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
