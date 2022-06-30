import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "Memoria",
        description: "Escribir el avance de la memoria",
        completed: false,
    },
    {
        id: "2",
        title: "Curso node",
        description: "Continuar viendo el curso de node",
        completed: false,
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if(taskFound){
                state.splice(state.indexOf(taskFound), 1)
            }
        },
        editTask: (state, action) => {
            const {id, title, description} = action.payload
            const taskFound = state.find(task => task.id === id)
            if(taskFound){
                taskFound.title = title
                taskFound.description = description
            }
        }
    },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = taskSlice.actions
export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer