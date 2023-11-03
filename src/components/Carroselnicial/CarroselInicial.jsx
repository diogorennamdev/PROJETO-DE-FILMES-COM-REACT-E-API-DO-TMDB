import Carousel from 'react-bootstrap/Carousel';
const imageUrl = import.meta.env.VITE_IMG;
import './styles.css';
import { CardMovie } from '../CardMovie';

function UncontrolledExample({ images }) {
  return (
    <Carousel interval={2000}  indicators={false}> 
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={imageUrl + image} alt="imagem do filme" className="d-block w-100" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
