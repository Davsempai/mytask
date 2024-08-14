import {MyTaskTitle} from './Components/MyTaskTitle'
import { MyTaskSearch } from './Components/MyTaskSearch';
import { MyTaskList } from './Components/MyTaskList';
import { MyTaskCreate } from './Components/MyTaskCreate';
import { MyTask } from './Components/MyTask';


const tasks = [
  {text : "Llorar con la llorona",
   completed : true
  },
  {text : "Bailar con Michael Jackson",
    completed : false
   },
   {text : "Comerme un tiburon",
    completed : true
   }
]

let completed = 0 

function App() {
  return (
    <>
      <div className='flex justify-center items-center flex-col flex-wrap m-auto'>
      <MyTaskTitle completed={completed} total={tasks.length} />
      
      <MyTaskSearch/>
      
      <MyTaskList>
      {tasks.map(task => (
      <MyTask key={task.text} text={task.text}/>   
      ))}
      </MyTaskList>
    
      <MyTaskCreate/>
      </div>
    </>
  );
}

export default App;
