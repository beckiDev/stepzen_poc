import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Courses from './components/Courses'
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const App = () => {
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <h3>Courses</h3>
        <Courses />
      </div>
      
    </ApolloProvider>
  );
}

export default App;
