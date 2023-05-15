import React, {useState, useEffect} from "react";
// const url = 'https://jsonplaceholder.typicode.com/users'


// Вариант 1, вызов по кнопке

// export default function App() {

//   const [data, setData] = useState();

//   const getApiId = () => {
//     fetch(url)
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

// export default function App() {

//   const [data, setData] = useState();
  
//     fetch(url)
//       .then(res => res.json())
//       .then(data => setData(data.map(item => `id = ${item.id} Name = ${item.name} \n`)))

//   return (
//     <div className="App">
//       <h1>Вывод</h1>  
//       <pre>{data}</pre>
//     </div>  
//   );
// }

// Вариант 3, перенёс .map в jsx

// export default function App() {

//   const [info, setData] = useState([]);
    
//     fetch(url)
//       .then(res => res.json())
//       .then(data => setData(data))

//   return (
//     <div className="App">
//       <h1>Вывод</h1>  
//       {info.map(item => {
//         return (
//           <p key={item.id}>{`id = ${item.id} Name = ${item.name}`}</p>
//         )
//       })}
//     </div>  
//   );
// }

// Вариант 4, useEffect

// export default function App() {

//   const [info, setData] = useState([]);
    

//   useEffect(() => {
//     fetch(url)
//     .then(res => res.json())
//     .then(data => setData(data))
//   },[])

//   return (
//     <div className="App">
//       <h1>Вывод</h1>  
//       {info.map(item => {
//         return (
//           <p key={item.id}>{`id = ${item.id} Name = ${item.name}`}</p>
//         )
//       })}
//     </div>  
//   );
// }


// Вариант 5, asinc await

export default function App() {

  const [info, setInfo] = useState([]);
  const [error, setError] = useState('');
    

  useEffect(() => {
      async function getchData() {
        try{
          const res = await fetch('https://jsonplaceholder.typicode.com/users');
          const conwertObjDataFromUrl = await res.json();
          return setInfo(conwertObjDataFromUrl);
        } catch (err) {
          setError('Something went wrong')
        } 
      }
      getchData()
  },[])

   

  return (
    <div className="App">
      <div>
        <h1>Вывод</h1> 
          {info.map(item => {
            return (
              <p key={item.id}>{`id = ${item.id} Name = ${item.name}`}</p>
            )
            })}
      </div>
      <p>{error}</p>            
    </div>  
  );
}