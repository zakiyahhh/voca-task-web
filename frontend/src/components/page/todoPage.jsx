import { useEffect, useState } from 'react';
import { doneTask, getTask, deleteTask } from '../../api/task';
import TodoPageTemplate from '../template/todoPageTemplate';

const TodoPage = () => {

    const [user] = useState({ name: 'Sarah' });
    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {
        const response = await getTask()
        setTasks(response.data)
    }

    const handleCompleteTask = async (id) => {
        await doneTask(id)
    };

    const handleDeleteTask = async (id) => await deleteTask(id);

    const handleEditProfile = () => alert('Edit Profile');
    const handleSignOut = () => alert('Signed Out');

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <TodoPageTemplate
            user={user}
            tasks={tasks}
            onCompleteTask={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
            onEditProfile={handleEditProfile}
            onSignOut={handleSignOut}
        />
    );
};

export default TodoPage;
