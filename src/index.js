import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import CompA, {CompB as B} from './componentes/DoisComponentes';
// import MultElementos from './componentes/MultElementos';
// import FamiliaOliveira from './componentes/FamiliaOliveira';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import CompoenteComFuncao from './componentes/ComponenteComFuncao';
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse';
// import Contador from './componentes/Contador';
import Hook from './componentes/Hook'


const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        {/* <MultElementos /> */}
        {/* <PrimeiroComponente valor="Bom dia!" valor2={Math.pow(2, 8)}/> */}
        {/* <CompA valor="valor A"/>
        <B valor="valor B"/> */}
        {/* <Familia sobrenome="Oliveira">
            <Membro nome="Nathan" />
        </Familia> */}
        {/* <FamiliaOliveira sobrenome="Oliveira"/> */}
        {/* <CompoenteComFuncao /> */}
        {/* <Pai /> */}
        {/* <ComponenteClasse valor="Sou um Componente de classe!"/> */}
        {/* <Contador numeroInicial={0}/> */}
        <Hook />
    </div>
, elemento);


// const jsx = <h1>Olá React</h1>
// ReactDOM.render(jsx, elemento);