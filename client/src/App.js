import './App.css';
import BooksList from "./BooksList.js";

function App() {
  const books= [
    {
      id: 1,
      title: "Spectrum Women: Walking The Beat of Autism", 
      author: "Barb Cook",
      description: "Barb Cook and 14 other autistic women describe life from a female autistic perspective, and present empowering, helpful and supportive insights from their personal experience for fellow autistic women. Michelle Garnett's comments validate and expand the experiences described from a clinician's perspective, and provide extensive recommendations. Autistic advocates including Liane Holliday Willey, Anita Lesko, Jeanette Purkis, Artemisia and Samantha Craft offer their personal guidance on significant issues that particularly affect women, as well as those that are more general to autism. Contributors cover issues including growing up, identity, diversity, parenting, independence and self-care amongst many others. With great contributions from exceptional women, this is a truly well-rounded collection of knowledge and sage advice for any woman with autism."
  },
    {
      id: 2,
      title: "The Electricity of Every Living Thing",
      author: "Katherine May",
      description: "A life-affirming and perspective-shifting memoir of one woman's walk in the wilds as she comes to terms with an Asperger's diagnosis. In August 2015, Katherine May set out to walk the 630-mile South West Coast Path. She wanted to understand why she had stopped coping with everyday life; why motherhood had been so overwhelming and isolating, and why the world felt full of inundation and expectations she can't meet. Setting her feet down on the rugged and difficult path by the sea, the answer begins to unfold. It's a chance encounter with a voice on the radio that sparks a realisation that she has Asperger's Syndrome. The Electricity of Every Living Thing tells the story of the year in which Katherine comes to terms with her diagnosis. It leads to a re-evaluation of her life so far - a kinder one, which finally allows her to be different rather than simply awkward, arrogant or unfeeling. The physical and psychological journeys become inextricably entwined, and as Katherine finds her way across the untameable coast, she also finds the way to herself. This book is a life-affirming exploration of wild landscapes, what it means to be different and, above all, how we can all learn to make peace within our own unquiet minds."
    },
    {
      id: 3,
      title: "Don't Mourn For Us", 
      author: "Jim Sinclair",
      description: "Jim Sinclair's 1993 essay Don't Mourn for Us has influenced the neurodiversity movement since its publication. Sinclair’s essay stands out as particularly radical when considered within the context of other autistic writings from the 1980s and early 1990s. While writers such as Temple Grandin and Donna Williams introduced mainstream audiences to the concept of autistic people narrating their own experiences, their works still relied on ableist ideas about autism promoted by non-autistic scientific “experts” and parents. They positioned autism as a tragedy. Sinclair, who was very familiar with parent-centric autism culture, upended those notions by challenging the notion that parental grief was the inevitable result of autism. In doing so, Sinclair played a major role in establishing the intellectual and cultural foundations of neurodiversity."
    }
  ]

  return (
    <div className="App">
      <h1>AutieReads</h1>
      <BooksList books={books} />
    </div>
  );
}

export default App;
