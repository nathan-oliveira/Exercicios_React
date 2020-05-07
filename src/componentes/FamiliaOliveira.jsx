import React from 'react';
import Membro from './Membro';

export default props => (
    <div>
        <Membro nome="Nathan" sobrenome={props.sobrenome} />
    </div>
)