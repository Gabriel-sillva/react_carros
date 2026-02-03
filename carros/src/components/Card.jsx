export default function Card({ item, isFav, onFav }) {
  return (
    <div className={`Card ${isFav ? "favoritado" : ""}`}>
      <img src={item.imga} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button onClick={() => onFav(item.id)} className="btn-favoritar">
        {isFav ? "Remover Favorito" : "Favoritar"}
      </button>
    </div>
  );
}