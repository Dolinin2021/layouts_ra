import PropTypes from 'prop-types';
import ShopCard from "./ShopCard";

export default function CardsView({ cards }) {
  return (
    <div className="cardview-cards-container">
      {cards.map((card, idx) => (
        <ShopCard elem={card} key={idx}/>
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.array,
}
