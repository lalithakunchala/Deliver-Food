import React from 'react';
import store from '../redux/store';

export default function Home(){

    console.log(store.getState());
    const {dishes} = store.getState();
    return (
        <>
        <div>Home</div>
        <div>{dishes[0].restaurant}</div>
        </>
       )
}
