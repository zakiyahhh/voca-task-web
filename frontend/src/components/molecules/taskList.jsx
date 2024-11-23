import TaskItem from "../atoms/taskItem";

const TaskList = ({ tasks, onComplete, onDelete }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onComplete={() => onComplete(task._id)}
                    onDelete={() => onDelete(task._id)}
                />
            ))}
        </div>
    );
};

export default TaskList;
