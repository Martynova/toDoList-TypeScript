import React from 'react';
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
        <h1>Information </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic cupiditate assumenda unde quod ab dolorem voluptate asperiores labore illo doloribus perferendis, minus suscipit provident odit id voluptatum amet temporibus repellat.</p>
        <button className='btn' onClick={()=> history.push('/')}>Main page</button>
        </>
    )
}