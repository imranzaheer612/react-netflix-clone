import './App.css';
import requests from './requests';
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="app">

      <Navbar></Navbar>    
      <Banner></Banner>

      <Row tittle={"Originals"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row tittle={"Trending"} fetchUrl={requests.fetchTrending}></Row>
      <Row tittle={"Top Rated"} fetchUrl={requests.fetchTopRated }></Row>
      <Row tittle={"Action"} fetchUrl={requests.fetchActionMovies}></Row>
      <Row tittle={"Comedy"} fetchUrl={requests.fetchComedyMovies}></Row>
      <Row tittle={"Horror"} fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row tittle={"Documentaries"} fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
