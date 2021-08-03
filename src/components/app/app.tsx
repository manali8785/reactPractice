import React from 'react';
import SearchBar from '../search/search-bar';
import Container from './app-styled';
import Map from '../map/map';

function App() {
  return (
    <Container>
      <SearchBar/>
      <Map/>
    </Container>
  )
}

export default App;
