import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import TvSeriesPage from './pages/TvSeriesPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/movie-page' exact component={MoviePage} />
          <Route path='/tv-series-page' exact component={TvSeriesPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
