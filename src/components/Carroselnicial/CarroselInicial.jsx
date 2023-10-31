import Carousel from 'react-bootstrap/Carousel';
const imageUrl = import.meta.env.VITE_IMG;
import './styles.css';

function UncontrolledExample({ images }) {
  return (
    <Carousel interval={3000}> {/* Define o intervalo em milissegundos (3 segundos) */}
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={imageUrl + image} alt="imagem do filme" className="d-block w-100" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
