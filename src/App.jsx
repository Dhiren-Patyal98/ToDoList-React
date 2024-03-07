import AddTodo from "./Screens/AddTodo";
import Todo from "./Screens/Todo";


export default function App() {
  const todoitem = [
      {
       
        title:'Shopping',
         desc:'Go to alphaone',
        remark:'Shopping budget 15K'

     },
     {
        
         title:'Food',
         desc:'Go to KFC',
         remark:'Shopping budget 2K'

     }
]
  return (
    <div>
      <AddTodo />
      <Todo todo= {todoitem}/>
    </div>
  )
}
