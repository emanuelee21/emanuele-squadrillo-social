import React, {useContext} from "react";
import './corpo.css';
import { AppContext, IAppContext } from "../../context/appcontext";

    
function Corpo () {
    const {jsonData} = useContext(AppContext) as IAppContext
    return ( 
        <div className="contenuto">
            {jsonData && jsonData?.map((item) => (
                <div className="post">
                    <p className="head">{item.id}. {item.title}</p>
                    <p className="body">{item.body}</p>
                </div>
            ))}   
        </div>
    )
}
export default Corpo;