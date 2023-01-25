import './App.css';
import "./App.css";
import BooksList from "./BooksList.js";

function App() {
  const books= [
    {
      title: "Spectrum Women: Walking The Beat of Autism", 
      author: "Barb Cook"
  },
    {
      title: "The Electricity of Every Living Thing",
      author: "Katherine May"
    },
    {
      title: "Don't Mourn For Us", 
      author: "Jim Sinclair"
    }
]

  return (
    <div className="App">
      <h1>AutieReads</h1>
      <BooksList books={books}/>
    </div>
  );
}

export default App;
