import React, { useState } from 'react'

function Valform() {
  const [form, setForm] = useState({
    fname : "",
    lname : "",
  }
);

function handleform(event){
    const {name,value} = event.target;


    // this a long method 

    // setName((preValue)=>{
    //   if(name === "fname"){
    //     return{
    //     fname :value,
    //     lname :preValue.lname
    //     }

    //   }else if(name === 'lname'){
    //     return {
    //       fname :preValue.fname,
    //       lname :value
    //   }

    //   }
    // })

    // by using spread operator 
    setForm((preValue)=>{
      return{
      ...preValue,
      [name] : value

      };

    });
}

  return (
    <>
    <h2>hello , {form.fname} {form.lname}</h2>
    <form action="">
        <input type="text" onChange={handleform} name='fname' placeholder='first name' /><br/>
        <input type="text" onChange={handleform} name='lname' placeholder='last name' /><br/>
        <button type="submit">Submit</button>
    </form>
      
    </>
  )
}

export default Valform
