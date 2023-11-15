import PropTypes from 'prop-types';
import ShopItem from "./ShopItem";

export default function ListView({ items }) {
  return (
    <div className="listview-cards-container">
      {items.map((item, idx) => (
        <ShopItem elem={item} key={idx}/>
      ))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.array,
}
