import React, {useState, useEffect} from 'react';
import {Post} from './types/commontypes';
import { AppContext } from './context/appcontext';
import Navbar from './componenti/navbar/navbar';
import Corpo from './componenti/corpo/corpo';
import Footer from './componenti/footer/footer';

function App() {
 const[jsonData, setJsonData] = useState<Post[] | undefined>()
 const propTypes = {jsonData, setJsonData}

  useEffect(() => {
  fetch('https://dummyjson.com/posts')
  .then(response => response.json())
  .then(json => setJsonData(json.posts))
  },[] 
  )
  return (
    <div>
    <AppContext.Provider value={propTypes}>
    <Navbar></Navbar>
    <Corpo></Corpo>
    <Footer></Footer>
    </AppContext.Provider>
    </div>
  )
}
export default App;