import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function Card({ item, isFav, onFav }) {
  return (
    <div className={`Card ${isFav ? "favoritado" : ""}`}>
      <img src={item.imga} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      
      {/* Botão transparente apenas com o ícone */}
      <button 
        onClick={() => onFav(item.id)} 
        className="btn-icon-favoritar"
        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '2rem' }}
      >
        {isFav ? (
          <AiFillHeart color="red" />   /* Coração Vermelho (Cheio) */
        ) : (
          <AiOutlineHeart color="black" /> /* Coração Preto (Borda) */
        )}
      </button>
    </div>
  );
}