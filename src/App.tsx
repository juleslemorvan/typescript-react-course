import { useRef, useState } from "react";
import { MessagesInt } from "./model";


const App = () => {

const inputMessage = useRef<HTMLInputElement | null>(null)

const [messData, setMessData] = useState<MessagesInt[]>([])

const handleSubmit = (e:any) => {
  e.preventDefault();

 

  //logique d'envoie des données
  (document.getElementById("inputMessage") as HTMLInputElement).value = "";
}

  return (
    <div>
     <h2>Entrez un message</h2>
     <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder='entrez votre message' id='inputMessage' ref={inputMessage} />
      <input type="submit" value="Envoyer" />
     </form>
     <h2>Liste des messages</h2>
   <div>
  {messData.map((data, index) => (
    <div key={index}>{data.message}</div>
  ))}
</div>
    </div>
  );
};

export default App;