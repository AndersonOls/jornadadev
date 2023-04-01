import './App.css';
import Video from "./pages/video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
          likes={100}
          messages={200}
          shares={300} 
          name="Paulo"
          description="Brecker o goleiro"
          music="Música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />

        <Video
          likes={444}
          messages={555}
          shares={789} 
          name="Paulo"
          description="Bird olhando"
          music="Clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
 

      </div>
    </div>
  );
}

export default App;
