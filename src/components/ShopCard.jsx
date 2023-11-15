import PropTypes from 'prop-types';

export default function ShopCard({ elem }) {
  return (
    <div className="cardview-card-item">
      <div className="cardview-top">
        <div className="cardview-item-name">{elem.name}</div>
        <div className="cardview-item-color">{elem.color}</div>
      </div>
      <div>
        <img className="cardview-card-img" src={elem.img} />
      </div>
      <div className="cardview-bottom">
        <div className="list-card-price">{'$' + elem.price}</div>
        <button className="list-card-button">add to cart</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  elem: PropTypes.object,
}
