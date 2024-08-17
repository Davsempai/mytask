import { MyTask } from "./MyTask"

function MyTaskList ({children}:{children?:ReactElement<MyTask>[]}) {
    return(
      <ul>
        {children}
      </ul>
    )
      }

export {MyTaskList}