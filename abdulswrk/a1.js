import {useEffect, useState} from "react";
import {onSnapshot, collection} from "@firebase/firestore";
import db from "./firebase";
const Dot = () => {
  const style = {
    height:25,
    width:25,
    margin: "0px 10px",
    backgroundColor: color,
  borderRadius: "50px",
display: "inline-block", 
 };
 return <span style = {style}></span>;
};

  export default function a1()
  { 
    const[colors, setColors] = useState([{name: "Loading...", id: "initial"}]);
    console.log(colors);
    useEffect(
      () => 
      onSnapshot(collection(db, "colors"),(snapshot) => 
        setColors(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      ),
      []
      );
      
    return(
     <div className = "root">
      <button className = "button">New</button>
      <ul>
        {
          colors.map((color) => (
        
        <li key = {color.display}>
        <a href = "#">edit</a> <Dot color = {color.value} /> {color.name}
        </li>
          ))}
        </ul>
    </div>
    );
  }
