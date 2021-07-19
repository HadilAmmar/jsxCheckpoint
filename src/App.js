import './style.css';
import './App.css';
import imageLike from "./spr5.jpg"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
        <h1 className="title red">Ammar Hadil</h1>
        <br />
        <br />
        <img  width="300" height="300" src={imageLike} alt="like emoticone" />
        <br />
        <br />
        <img width="300" height="300"  src="/spr8.jpg" alt="funny emoticone" />
      
      </div> 
      <br />
      <iframe width="300" height="300" src="https://www.youtube.com/embed/7fPXI_MnBOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
