import logo from './logo.svg';
import './App.css';
import ButtonClick from './Components/ButtonClick';
import Register_user from './Components/Register_user';
import React, {useState, useEffect} from "react";

function App() {
    const [num, setNum] = useState(0)

    //useEffect Hook serve after render.
    useEffect(() => {
        document.title = "title : " + num; //this will update title.
    })
    return (
        <div className="App">
            <ButtonClick></ButtonClick>
            <Register_user></Register_user>
            <div>
                <br/>
                <br/>
                {/*Use Hook*/}
                <button onClick={() => setNum(num + 1)}>Click To Count</button>
                <h3>Click count by using Hook: {num}</h3>
            </div>
        </div>
    );
}

export default App;
