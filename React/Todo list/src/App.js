import React, {useState} from 'react';

import Todo from './component/todo-hook/index.js';
function App() {
  return (
    <div>
      <Todo/>
    </div>
  );
}


// import Child from './component/child/index.js';
// function App() {
//   let [name, setName] = useState('kkb')
//   return (
//     <div>
//       <Child name={name}
//              setName={setName}
//       />
//     </div>
//   );
// }


// import {useSize, useScrollY} from './component/child/hook.js';
// function App() {
//   let [scrollY, setScrollY] = useScrollY();
//   return (
//     <div>
//       <ul>
//         {
//           [...(".".repeat(100))].map((item, index)=>{
//             return <li key={index}>item {index}</li>
//           })
//         }
//       </ul>
//     </div>
//   );
// }

export default App;
