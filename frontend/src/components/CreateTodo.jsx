import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle]= useState("");
    const [desc,setDesc]= useState("");
    return <div>
        <input id="title" type="text" placeholder="title"  onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} ></input><br/>
        <input id="desc" type="text" placeholder="desc" onChange={function(e){
            const value = e.target.value;
            setDesc(e.target.value);
        }}></input><br/>
        <button onClick={()=> { fetch("http://localhost:3000/todo",{method:"POST",
        body:JSON.stringify({  title:document.getElementById("title").value,
            desc:desc}),
            headers:{"contentType":"application/json"}
          
        }).then(async function(res){
            const json = await res.json();
            alert("todo added");
        })        }}>Add a todo </button>
    </div>
}