import {useState} from "react";

export default function App() {

    let [counter, setCounter] = useState(0);

  return (
      <div>
          <h1>{counter}</h1>
          <button onClick={()=>{
              setCounter(counter++);
          }}> increment

          </button>
      </div>
  );
}




