import logo from './logo.svg';
import './App.css';
import Character from "./components/character";

function App() {
    return (
        <div>
            <Character
                name = {'Homer Simpson'}
                img = {'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
                desc ={'Homer Jay Simpson is one of the main characters of the American animated sitcom The Simpsons. He is voiced by Dan Castellaneta and first appeared, along with the rest of his family, in The Tracey Ullman Show short "Good Night" on April 19, 1987.'}
            />

            <Character
                name = {'Marge Simpson'}
                img = {'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'}
                desc ={'Marjorie Jacqueline "Marge" Simpson[1] (née Bouvier) is a character, based on the real Marge (Matt Groening\'s mom), in the American animated sitcom The Simpsons and part of the eponymous family. Voiced by Julie Kavner, she first appeared on television in The Tracey Ullman Show short "Good Night" on April 19, 1987. '}
            />

            <Character
                name = {'Bart Simpson'}
                img = {'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
                desc ={' Bart JoJo Simpson is a fictional character in the American animated television series The Simpsons and part of the Simpson family. He is voiced by Nancy Cartwright and first appeared on television in The Tracey Ullman Show short "Good Night" on April 19, 1987'}
            />

            <Character
                name = {'Lisa Simpson'}
                img = {'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
                desc ={'Lisa Marie Simpson[1] is a fictional character in the animated television series The Simpsons. She is the middle child and most accomplished of the Simpson family. Voiced by Yeardley Smith, Lisa was born as a character in The Tracey Ullman Show short "Good Night" on April 19, 1987. '}
            />

            <Character
                name = {'Maggie Simpson'}
                img = {'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
                desc ={' Margaret Evelyn Lenny "Maggie" Simpson[1][2] is a fictional character in the animated television series The Simpsons and a part of the Simpson family, notably the youngest member. She first appeared on television in the Tracey Ullman Show short "Good Night" on April 19, 1987.'}
            />


        </div>
    );
}
export default App;





// <div>
//     <h2>Bart</h2>
//     <img src={"https://upload.wikimedia.org/wikipedia/ru/thumb/2/29/Bart_Simpson.gif/180px-Bart_Simpson.gif"}/>
//
//
// </div>