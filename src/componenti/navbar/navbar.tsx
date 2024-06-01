import React, { useEffect, useState, useContext } from "react";
import { AppContext, IAppContext} from "../context/appcontext";
import './navbar.css';

function Navbar() {
    const [textContent, setTextContent] = useState<string>('')
    const [titleContent, setTitleContent] = useState<string>('')
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext

    function handleSave() {
        if(jsonData) {
            const item={
                id: jsonData.length,
                title: titleContent,
                body: textContent
            }
            jsonData.push(item)
            setJsonData([...jsonData])
        }
    }
        return (
                <div className="navbar">
                    <h1>Emanuele Squadrillo's SOCIAL</h1>
                    <input type="text" className="testo" placeholder="Inserisci titolo..."onChange={(event) => setTitleContent(event.target.value)}/>
                    <textarea className="testo" placeholder="Scrivi..." onChange={(event) => setTextContent(event.target.value)}></textarea>
                    <button id="save" onClick={() => handleSave()}>Salva</button>           
                 </div>
        )
    }



export default Navbar;
   