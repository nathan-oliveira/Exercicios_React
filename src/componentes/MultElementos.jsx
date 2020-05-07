import React from 'react';



// elementos adjacentes
// Solução 3
export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
];

// Solução 2
// export default props => (
//     <React.Fragment> // usando para agrupar os elementos dentro dele
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>
// );

// Solução 1, mais usada!
// export default props => (
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>
// );