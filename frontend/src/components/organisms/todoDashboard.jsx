import AddTaskBar from '../molecules/addTaskbar';
import TaskList from '../molecules/taskList';

const TodoDashboard = ({ tasks, onCompleteTask, onDeleteTask, setRefresh, refresh }) => {
    return (
        <div className="p-4 bg-[#121212] rounded-lg">
            <AddTaskBar setRefresh={setRefresh} refresh={refresh} />
            <h3 className="text-white mb-2">Tasks to do - {tasks?.filter(task => !task.isDone)?.length}</h3>
            <TaskList tasks={tasks?.filter(task => !task.isDone)} onComplete={onCompleteTask} onDelete={onDeleteTask} />
            <h3 className="text-white mt-6 mb-2">Done - {tasks?.filter(task => task.isDone)?.length}</h3>
            <TaskList tasks={tasks?.filter(task => task.isDone)} onComplete={onCompleteTask} onDelete={onDeleteTask} />
        </div>
    );
};

export default TodoDashboard;
