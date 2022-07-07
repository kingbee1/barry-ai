
import './App.css';
//import {Article, Brand, Cta, Feature, Navbar } from './components'
import {BarryAi, Blog, Header, Features, Possibility, Footer } from './containers'
import {Cta, Brand, Navbar } from './components'

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <BarryAi />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />  
    </div>
  );
}

export default App;
