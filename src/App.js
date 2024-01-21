
import './App.css';
import React, { useEffect } from 'react'
import { db } from './Firebase';
import {collection,addDoc,getDocs,onSnapshot,doc,deleteDoc,getDoc, updateDoc} from 'firebase/firestore'
import { useState } from 'react';
function App() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [data, setData] = useState([])
const [id, setId] = useState('')
const [updatedData, setupdatedData] = useState({})

const collectionRef = collection(db,'crud')

const handleSubmit=async (e) =>{
  e.preventDefault()
  if(id===''){
    await addDoc(collectionRef,{name,email})
    console.log('submitted')
    setName('')
  setEmail('')

  }else{
    const UpdateData = doc(db,'crud',id)
    updateDoc(UpdateData,{name,email})
    setName('')
    setEmail('')
    setId('')
  
  }
  
 


}
// setName('')
// setEmail('')



useEffect(() => {
  //  const fetchData = async ()=>{
  //   const fetch = await getDocs(collectionRef)
  //   setData(fetch.docs.map((doc)=>({
  //     ...doc.data(), id:doc.id
  //   })))
  //  } 
  const fetchData = async ()=>{
    onSnapshot(collectionRef,(snapshot)=>{
      setData(snapshot.docs.map((doc)=>({
        ...doc.data(),id:doc.id
      })))
    })
    
   } 
  

   fetchData()
   console.log(data)
   setName(updatedData.name)
   setEmail(updatedData.email)
   console.log("running")
},[updatedData] )


const handleDelete = (id) =>{

const deleteData = doc(db,'crud',id)
deleteDoc(deleteData)

}

const handleUpdate = (id) =>{
  setId(id)
  const UpdateData = doc(db,'crud',id)
getDoc(UpdateData).then((doc)=>setupdatedData(doc.data()))
  }
  


  return (
<>
<div className="App">
<h1>Firebase Crud</h1>
<form onSubmit={handleSubmit}>
name:- <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
<br/>
<br/>
email:- <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<br/>
<br/>
<input type='submit'/>
</form>
</div>
<div className='App'>
{
  data.map((d)=>{
    
    return(
     <>
     <h1>{d.name}{d.email}{" "}<button onClick={()=>handleDelete(d.id)}>Delete</button>{" "}
     <button onClick={()=>handleUpdate(d.id)}>Update</button>
     </h1>
    
     </>
      
    )
  })
}
</div>
</>
  );
}

export default App;
