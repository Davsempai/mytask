function MyTaskTitle (props) {
    return(
      <h1>
        Has completado {props.completed} tarea{props.completed>1 && 's'} de {props.total}
      </h1>
    )
      }

export {MyTaskTitle} 