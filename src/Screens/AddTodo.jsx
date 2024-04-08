import style from './cssModule/TodoCss.module.css'
import React, { useState } from "react";


export default function AddTodo(props) {

  const [title,settitle] = useState('');
  const [desc,setdesc] =useState('');
  const [remark,setremark]= useState('');
  
  const tododata = {
    title:title,
    desc:desc,
    remark:remark,

  }
  return (
    <div className= {`${style.m}`}>
        <h3 className={style.f}>Add ToDo</h3>
        <div className='card'>
            <div className='card-body'>
            <div>
            
            <div className='row'>
                <div className='col'>
                    <input
                    type='text'
                    className='form-control'
                    id='title'
                    placeholder='Title'
                    value={title}
                    onChange={(event)=>
                    {
                      settitle(event.target.value);

                    }}
                    >

                    </input>
                </div>
                <div className='col'>
                    <input
                    type='text'
                    className='form-control'
                    id='description'
                    placeholder='Description'
                    value={desc}
                    onChange={(event)=>
                      {
                        setdesc(event.target.value);
  
                      }}
                   >

                    </input>
                </div>
                <div className='col'>
                    <input
                    type='text'
                    className='form-control'
                    id='budget'
                    placeholder='Budget'
                    value={remark}
                    onChange={(event)=>
                      {
                        setremark(event.target.value);
  
                      }}
                  >

                    </input>
                </div>
            </div>
            <div className="d-grid gap-2 col-3   mx-auto mt-4">
  <button onClick ={()=>
  {props.f(tododata)
    settitle("");
    setdesc("");
    setremark("");
  }
} className="btn btn-outline-success" type="button">Add Todo</button>
 
</div>

        </div>
            </div>
        </div>
      
    </div>
  )
}
