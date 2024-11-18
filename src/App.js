import './App.css';
import NetflixRow from './NetflixRow';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>

      <h1>Netflix</h1>
      <NetflixRow title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginal} isLargeRow/>

      <NetflixRow title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <NetflixRow title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <NetflixRow title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <NetflixRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <NetflixRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <NetflixRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <NetflixRow title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
