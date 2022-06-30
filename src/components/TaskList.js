import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'

function TaskList() {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteTask(id))
    }

    return (
        <div className='w-4/6'>
            <header className='flex justify-between items-center py-4'>
                <h1>Tareas: {tasks.length}</h1>
                <Link to="/create-task" className='bg-indigo-600 px-2 py-1 rounded-sm text-sm' >Crear tarea</Link>
            </header>

            <div className='grid grid-cols-3 gap-3'>
                {tasks.map(task => (
                    <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
                        <header className='flex justify-between'>
                            <h3>{task.title}</h3>

                            <div className='flex gap-x-2'>
                                <button
                                    onClick={() => handleDelete(task.id)}
                                    className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                                >
                                    Eliminar
                                </button>
                                <Link
                                    to={`/edit-task/${task.id}`}
                                    className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                                >
                                    Editar tarea
                                </Link>
                            </div>
                        </header>

                        <p>{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskList