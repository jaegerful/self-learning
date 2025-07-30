import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Users from './Users';
import User from './User';
import CreateUser from './CreateUser';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // our Apollo GraphQL server exposes this endpoint.
    cache: new InMemoryCache(),
  });
  
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/user" element={<User />} />
                <Route path="/create" element={<CreateUser />} />
          </Routes>
        </Router> 
      </div>
    </ApolloProvider>
  );
}

export default App;
