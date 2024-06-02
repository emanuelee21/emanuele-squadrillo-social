import React, {useState, useContext } from "react";
import { AppContext, IAppContext} from "../../context/appcontext";
import './navbar.css';

function Navbar() {
    const [textContent, setTextContent] = useState<string>('')
    const [titleContent, setTitleContent] = useState<string>('')
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext

    function handleSave() {
        if(jsonData) {
            const item={
                id: jsonData.length+1,
                title: titleContent,
                body: textContent
            }
            jsonData.push(item)
            setJsonData([...jsonData])
            alert("salvataggio effettuato con successo!");  
            
        }
    }
        return (

                <div className="navbar">
                        <h1>Emanuele Squadrillo's SOCIAL</h1>
                    <div className="testo">
                        <input type="text" className="textbox" placeholder="Inserisci titolo..."onChange={(event) => setTitleContent(event.target.value) }/>
                        <textarea className="textarea" placeholder="Scrivi il tuo post..." onChange={(event) => setTextContent(event.target.value)}></textarea>
                    </div>
                    <div className="invio">
                        <button className="submit" onClick={() => handleSave()}>Salva</button>
                    </div>              
                 </div>
        )
    }
export default Navbar;
   