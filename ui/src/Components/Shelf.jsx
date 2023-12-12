import React from "react";
import { useContext } from "react";
import Context from '../Context'

export default function Shelf() {
  const {myValue, setMyValue} = useContext(Context);
  return (
    <>
    <p>Value from Context: {myValue}</p>
    <div className=''>Shelf</div>
    <button onClick={()=> setMyValue((prev)=> prev+1)} >Click</button>
    </>
  )
}
