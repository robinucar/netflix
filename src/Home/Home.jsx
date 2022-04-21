import List from '../components/List/List'
import Featured from "../components/Featured/Featured";
import Navbar from "../components/Navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
