import ProfileCard from '../molecules/profileCard';
import TodoDashboard from '../organisms/todoDashboard';

const TodoPageTemplate = ({ tasks, onCompleteTask, onDeleteTask, setRefresh, refresh }) => {
    return (
        <div className="flex gap-4 p-8 bg-[#0f0f0f] min-h-screen">
            <div className="w-1/4">
                <ProfileCard />
            </div>
            <div className="w-3/4">
                <TodoDashboard
                    tasks={tasks}
                    onCompleteTask={onCompleteTask}
                    onDeleteTask={onDeleteTask}
                    setRefresh={setRefresh}
                    refresh={refresh}
                />
            </div>
        </div>
    );
};

export default TodoPageTemplate;
