import Row from './Row';
import Navbar from './Navbar'
import Banner from './Banner'
import requests from '../requests';
import './HomeScreen.css'
import React from 'react'


function HomeScreen() {
  return (
    <div className="homeScreen">

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
  )
}

export default HomeScreen