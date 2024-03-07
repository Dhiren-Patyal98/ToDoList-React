import style from './cssModule/TodoCss.module.css'

export default function AddTodo() {
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
                    >

                    </input>
                </div>
                <div className='col'>
                    <input
                    type='text'
                    className='form-control'
                    id='description'
                    placeholder='Description'
                   >

                    </input>
                </div>
                <div className='col'>
                    <input
                    type='text'
                    className='form-control'
                    id='budget'
                    placeholder='Budget'
                  >

                    </input>
                </div>
            </div>
            <div className="d-grid gap-2 col-3   mx-auto mt-4">
  <button  className="btn btn-outline-success" type="button">Add Todo</button>
 
</div>

        </div>
            </div>
        </div>
      
    </div>
  )
}
