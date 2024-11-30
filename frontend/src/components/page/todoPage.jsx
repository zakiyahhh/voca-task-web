import { useEffect, useState } from 'react';
import { doneTask, getTask, deleteTask } from '../../api/task';
import TodoPageTemplate from '../template/todoPageTemplate';

const TodoPage = () => {
    const [refresh, setRefresh] = useState(false)
    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {
        const response = await getTask()
        setTasks(response.data)
    }

    const handleCompleteTask = async (id) => {
        await doneTask(id)
        setRefresh(!refresh)
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id)
        setRefresh(!refresh)
    };

    useEffect(() => {
        fetchData();
    }, [refresh])

    return (
        <TodoPageTemplate
            tasks={tasks}
            onCompleteTask={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
            setRefresh={setRefresh}
            refresh={refresh}
        />
    );
};

export default TodoPage;
