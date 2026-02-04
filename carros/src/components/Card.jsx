import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Card({ item, isFav, onFav }) {
  return (
    <div className={`Carta-Container ${isFav ? "favoritado" : ""}`}>
      <div className="carta-inner">
        <div className="carta-header-nome">
          <h2>{item.title}</h2>
        </div>

        <div className="carta-quadro-superior">
          <div className="carta-img-box">
            <img src={item.imga} alt={item.title} />
          </div>
          <div className="carta-atributos">
            <p><strong>ANO:</strong> {item.ano}</p>
            <p className="mod-destaque"><strong>MOD:</strong> {item.modelo}</p>
          </div>
        </div>

        <div className="carta-quadro-info">
          <h3>Descrição</h3>
          <div className="carta-texto-box">
            <p>{item.description}</p>
          </div>
        </div>

        <div className="carta-footer">
          <button onClick={() => onFav(item.id)} className="btn-fav-card">
            {isFav ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
          </button>
        </div>
      </div>
    </div>
  );
}
