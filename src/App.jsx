import AddTodo from "./Screens/AddTodo";
import Todo from "./Screens/Todo";
import React, { useState } from "react";

export default function App() {

  const [todoitem, Addtodo] = useState([]);

  const test = (e)=> {
    console.log(e.title)
    console.log(e.desc)
    console.log(e.remark)

    const obj={
      title:e.title,
      desc:e.desc,
      remark:e.remark
    }
    Addtodo([...todoitem,obj]);
  }



  // const todoitem = [
  //     {
       
  //       title:'Shopping',
  //        desc:'Go to alphaone',
  //       remark:'Shopping budget 15K'

  //    },
  //    {
        
  //        title:'Food',
  //        desc:'Go to KFC',
  //        remark:'Shopping budget 2K'

  //    }
  //   ]

  return (
    <div>
      <AddTodo f={test} />
      <Todo todo= {todoitem}/>
    </div>
  )
}
