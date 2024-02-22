import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import MovieList from './components/movieList';
import movies from './data';

function App() {
  return (
    <>
      <Header />
      <MovieList movies={ movies }/>
      <Footer />
    </>
  )
}

export default App

