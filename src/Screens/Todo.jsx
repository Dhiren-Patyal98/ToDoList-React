import Todoitems from './Todoitems';
import style from './cssModule/TodoCss.module.css'

export default function Todo({todo}) {
    
  return (
    <>
    <div className={`${style.m}`}>
        <h3 className={`${style.f}`}>ToDo-List</h3>
        {  todo.length == 0 ? <div class="alert alert-danger" role="alert">
  No Data Available
</div>:
        <table className="table table-hover">
  <thead>
    <tr className='table-dark'>
      <th scope="col">Sno.</th>
      <th scope="col">Title </th>
      <th scope="col">Description</th>
      <th scope="col">Budget</th>
    </tr>
  </thead>
  <tbody>
    
         { todo.map((value,index) => {
            return(
              <Todoitems value={value} index={index}/>
            );
        })}
    
 
  </tbody>
</table>
}
      
    </div>
    </>
  )
}
