import './App.css';
import NewsList from './components/NewsList';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'

import Amplify, { API, graphqlOperation } from 'aws-amplify'
//The App component handles all of the rendering in the browser.
function App() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
  const getCases = async() =>{
    const res2 = await Axios.get('https://covidapi.info/api/v1/country/IRL/latest')
    setCases(res2.data.cases);
    console.log(res2)
    
};
    getCases();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <nav>
        <ul>
        <li><a href="/app">Home</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="tips.html">Lockdown Tips</a></li>
    </ul>
        </nav>

        </header>
        <body>
          <p>
            CoronaVirus
          </p>



          {/*{cases.map(({confirmed, deaths, recovered,}) => (
                <caseItem   confirmed={confirmed} deaths={deaths} recovered={recovered}     />
          ))}*/}


          {/*Calls the NewsList Component and displays it all from the below tag.*/}
          <NewsList/>
          </body>
       
     
      
    </div>
  );
}


//Twitter API Key: 1E3fSBGwdSwMQUNCbmrG2lSzt
//Twitter API Secret key: 5M2CKlIBCKEdFOsr753gYYZH5dbEyPF54ZrZ1rb7ghDpFOL4Ua
//Bearer token: AAAAAAAAAAAAAAAAAAAAAG8nMgEAAAAAgdfN2vq84utsBwnyVaWTskr%2FVu4%3DXPrOd5VUVTBD9yqiFfpwTwHI8lnnp7NMn2UMaaskytvdNQbud1

export default App;
