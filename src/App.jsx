import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

// Routes
import HomePage from './routes/HomePages/HomePage';
import PokemonPage from './routes/PokemonPage/PokemonPage';

function App() {
  return (
    <Router>
      <div className="bg-orange-400 min-h-screen">
        <header>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/Pokemon'>Pokemon</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Pokemon' element={<PokemonPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
