import logo from './logo.svg';
import './App.css';
import Character from "./components/character";

function App() {
  return (
      <div>

          <div className={`head`}>
              <h1>The Rick and Morty API</h1>
          </div>
          <div className={`body`}>
        <Character
            id={157}
            name={"Hole in the Wall Where the Men Can See it All"}
            status={"unknown"}
            species={"unknown"}
            gender={"Genderless"}
            image = {'https://rickandmortyapi.com/api/character/avatar/157.jpeg'}
        />

          <Character
              id={411}
              name={"Alien Mexican Armada"}
              status={"unknown"}
              species={"Alien"}
              gender={"Male"}
              image = {'https://rickandmortyapi.com/api/character/avatar/411.jpeg'}
          />

          <Character
              id={447}
              name={"Anchor Gea"}
              status={"Alive"}
              species={"Alien"}
              gender={"Male"}
              image = {'https://rickandmortyapi.com/api/character/avatar/447.jpeg'}
          />

          <Character
              id={464}
              name={"SEAL Team Rick"}
              status={"Dead"}
              species={"Human"}
              gender={"Male"}
              image = {'https://rickandmortyapi.com/api/character/avatar/464.jpeg'}
          />

          <Character
              id={691}
              name={"Scarecrow Beth"}
              status={"Dead"}
              species={"Robot"}
              gender={"Female"}
              image = {'https://rickandmortyapi.com/api/character/avatar/691.jpeg'}
          />

          <Character
              id={691}
              name={"Amazing Johnathan"}
              status={"Alive"}
              species={"Human"}
              gender={"Male"}
              image = {'https://rickandmortyapi.com/api/character/avatar/734.jpeg'}
          />

          </div>
      </div>
  );
}
export default App;



/*
Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
https://rickandmortyapi.com/
https://rickandmortyapi.com/api/character
Створити 6 персонажів

 */