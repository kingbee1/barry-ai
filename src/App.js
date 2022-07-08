
import './App.css';
//import {Article, Brand, Cta, Feature, Navbar } from './components'
import {WhatBarry, Blog, Header, Features, Possibility, Footer } from './containers'
import {Cta, Brand, Navbar } from './components'

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatBarry />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />  
    </div>
  );
}

export default App;
