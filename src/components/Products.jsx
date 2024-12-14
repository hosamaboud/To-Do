import { Row } from 'react-bootstrap';
import productsData from '../data.js';

const Products = () => {
  return (
    <Row className="justify-content-around">
      {productsData.map((product) => (
        <article key={product.id} className="card__article">
          <img className="card__img" src={product.image} alt={product.title} />
          <div className="card__data">
            <p className="card__title">{product.title}</p>
            <span className="card__description">Lorem ipsum, dolor</span>

            <a className="card__btn" href="">
              Buy Now
            </a>
          </div>
        </article>
      ))}
    </Row>
  );
};

export default Products;
