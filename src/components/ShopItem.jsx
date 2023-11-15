import PropTypes from 'prop-types';

export default function ShopItem({ elem }) {
  return (
    <div className="list-card-item">
      <div>
        <img className="list-card-img" src={elem.img} />
      </div>
      <div>{elem.name}</div>
      <div>{elem.color}</div>
      <div className="list-card-price">{'$' + elem.price}</div>
      <button className="list-card-button">add to cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  elem: PropTypes.object,
}
