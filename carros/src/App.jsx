import { useState } from "react";
import { itensInicio } from "./data/intem.js";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [items] = useState(itensInicio);
  const [favoritos, setFavoritos] = useState([]);

  const toggleFav = (id) => {
    setFavoritos(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="app-container">
      <header className="header-topo">
        <h1> Losantzz Motors</h1>
        <div className="fav-counter">FAV {favoritos.length}</div>
      </header>

      <section className="container-cards">
        {items.map(item => (
          <Card 
            key={item.id} 
            item={item} 
            isFav={favoritos.includes(item.id)} 
            onFav={toggleFav} 
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}