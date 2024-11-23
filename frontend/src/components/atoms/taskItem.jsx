const TaskItem = ({ task, onComplete, onDelete }) => {
    return (
        <div className="flex items-center justify-between p-3 mb-2 bg-[#1b1424] rounded-lg">
            <span className={task.completed ? 'line-through text-gray-400' : 'text-white'}>
                {task.title}
            </span>
            <div className="flex gap-2">
                <button onClick={onComplete} className="text-purple-400">✔</button>
                <button onClick={onDelete} className="text-red-400">🗑️</button>
            </div>
        </div>
    );
};

export default TaskItem;
