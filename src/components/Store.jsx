import PropTypes from 'prop-types';
import { useState } from "react";
import CardsView from "./CardsView";
import ListView from "./ListView";
import IconSwitch from "./IconSwitch";

export default function Store({ products }) {
  const [icon, setIcon] = useState('view_list');
  const click = () =>
    setIcon((prevIcon) =>
      prevIcon === 'view_list' ? 'view_module' : 'view_list'
    );
  return (
    <>
      <div className='icon-switch-container'>
        <IconSwitch icon={icon} onSwitch={click} />
      </div>
      {icon === 'view_module' ? (
        <ListView items={products} />
      ) : (
        <CardsView cards={products} />
      )}
    </>
  );
}

Store.propTypes = {
  products: PropTypes.array,
}
