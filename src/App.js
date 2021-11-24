import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests';
import Banner  from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <Nav />
      
       {/* Banner */}
       <Banner/>
    
     <Row title="NETFLIX - LES ORIGINAUX :)"
      fetchUrl = {requests.fetchNetflixOriginals}
       isLargeRow/>
     <Row title="Regarder Maintenant.." fetchUrl = {requests.fetchTrending} /> 
     <Row title="Le top de la semaine.." fetchUrl = {requests.fetchTopRated} /> 
     <Row title="Les films d'actions" fetchUrl = {requests.fetchActionMovies} /> 
     <Row title="Films de comédie" fetchUrl = {requests.fetchComedyMovies} /> 
     <Row title="Les films d'horreur.." fetchUrl = {requests.fetchHorrorMovies} /> 
     <Row title="Les fimls romantiques" fetchUrl = {requests.fetchRomanceMovies} /> 
     <Row title="Documentaires.." fetchUrl = {requests.fetchDocumentaries} /> 

     
    </div>
  );
}

export default App;
