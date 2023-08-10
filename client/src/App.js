import React, {useEffect, useState} from 'react';


function App() {

  const [backendData, setBackendData] = useState([{}]);
  
  //two arguments, first is the function called effect, second is the dependency array
  useEffect(() => {
    fetch('/api').then( //fetching the data from the backend
      response => response.json() //response in json format, then the data is set to the backendData
    ).then(data => {
      setBackendData(data) //
    }
    )
    
  }, []) //dependency array is empty, so it will only run once

  return (
    <div>
      <h1>Backend Data</h1>
      {(typeof backendData.users === 'undefined') ? (<p>loading...</p>) : (
        backendData.users.map((user, index) => (
          <div key={index}>
            <p>{user.name} - {user.age} </p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
