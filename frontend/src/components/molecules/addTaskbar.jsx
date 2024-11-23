import Input from '../atoms/input';
import Button from '../atoms/Button';
import { createTask } from '../../api/task';
import { useState } from 'react';

const AddTaskBar = () => {
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createTask(task)
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
            <Input type="text" placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)} />
            <Button type="submit" text="+" color="bg-purple-500 text-white" />
        </form>
    );
};

export default AddTaskBar;
