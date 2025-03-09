import { useState } from "react"

export default function Content() {

    const [todoList, setTodoList] = useState([
        { id: 0, value: "Clean dishes", isDone: false },
        { id: 1, value: "Cook dinner", isDone: false }
    ])

    const todoListElements = todoList.map(
        todo => (
            <li
                id={todo.id}
                key={todo.id}> Task: {todo.value}
                <button type="button">Update</button>
                <button type="button">Delete</button>
            </li>
        )
    )

    //TASK for monday
    //create css
    //add function to add details; if add details was clicked while there is value in txtbox, add said text to list
    //add delete function button

    return (
        <main>
            <div className="task-add">
                <form className="">
                    <input type="text" />
                    <button type="submit">Add details</button>
                </form>
            </div>
            <div className="task-details">
                <ul>
                    {todoListElements}
                </ul>
            </div>
            <div className="task-search">
            <span>Search task</span>
            <form action="">
                <input type="text" name="" id="" />
                <button type="submit">Search</button>
            </form>
            </div>
        </main>
    )
}