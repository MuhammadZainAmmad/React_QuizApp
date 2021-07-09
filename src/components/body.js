import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Body = () => {
    let state = useSelector(state => state)
    const [arr, setArray] = useState(state)

    const [count, setCount] = useState(0)

    function nextButton () {
        if(count < arr.length-1){
            setCount(count+1)
        }
    }

    return (
        <div className='container bg-primary'>
            <div className='row'>
                <div className='col text-white'>Question {count + 1} of {arr.length}</div>
            </div>
            <div className='row'>
                <div className='col text-white'>{arr[count].ques}</div>
            </div>
            <div className='row'>
                <div className="col-3 text-white">{arr[count].opt[0]}</div>
                <div className="col-3 text-white">{arr[count].opt[1]}</div>
                <div className="col-3 text-white">{arr[count].opt[2]}</div>
                <div className="col-3 text-white">{arr[count].opt[3]}</div>
            </div>
            <div className='row'>
                <button type="button" className="btn btn-secondary" onClick={nextButton}>Next</button>
            </div>
        </div>)
}

export default Body;