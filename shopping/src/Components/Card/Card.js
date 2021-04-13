/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';


const Card = React.memo(({product, addCart}) => {
  const {name, imageURL, sku, description, price, disabled} = product;
  const temp = imageURL.split('/').reverse()
  const imageURLAt1 = temp[1]
  const imageURLAt2 = temp[0]
  return (
    <div className="product-wrap">
      <div className="product-header-wrapper">
        <h4>{name}</h4>
      </div>
      <div className="product-detail-wrap">
        <img
          src={require(`../../../static/images/products/${imageURLAt1}/${imageURLAt2}`).default}
          alt={sku}
        />
        <div className="product-description">
          <p>{description}</p>
        </div>
        <div className="product-price-wrap">
          <div className="product-price">
            <span>MRP RS.{price}</span>
          </div>
          <div className="product-buy-out">
            <button
              type="button"
              onClick={() => addCart(product)}
              disabled={!!disabled}
            >
              {!disabled ? `Buy Now` : `In Cart`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default Card;