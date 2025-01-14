import Carousel from './Carousel';
import Categories from './Categories';
import './Home.scss';

const Home = () => {
  return (
    <div className="page-wrap">
      <div className="container">
        <Carousel />
        <Categories />
      </div>
    </div>
  );
};

export default Home;
