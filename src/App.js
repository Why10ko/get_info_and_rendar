import React from "react";
import {useState} from 'react'




// export default function App() {

//   const [data, setData] = useState();

//   const getApiId = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setData(data.map(item => `id = ${item.id} Name = ${item.name} \n`)))
//   }

//   return (
//     <div className="App">
//       <h1>Вывод</h1>  
//       <button onClick={getApiId}>Кнопка</button>
//       <pre>{data}</pre>
//     </div>  
//   );
// }



// Вариант 2, вывод без кнопки

export default function App() {

  const [data, setData] = useState();
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setData(data.map(item => `id = ${item.id} , Name = ${item.name} \n` )))

  return (
    <div className="App">
      <h1>Вывод</h1>  
      <pre>{data}</pre>
    </div>  
  );
}


