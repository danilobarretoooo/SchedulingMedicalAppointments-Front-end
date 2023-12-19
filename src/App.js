import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ConsultaList from './components/ConsultaList';
import ConsultaForm from './components/ConsultaForm';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Listar Consultas</Link>
              </li>
              <li>
                <Link to="/agendar">Agendar Consulta</Link>
              </li>
            </ul>
          </nav>

          <hr />

          <Route path="/" exact component={ConsultaList} />
          <Route path="/agendar" component={ConsultaForm} />
          <Route path="/test" render={() => <div>Teste de Rota</div>} />
        </div>
      </Router>
  );
}

export default App;
