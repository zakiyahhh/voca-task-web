import ProfileCard from '../molecules/profileCard';
import TodoDashboard from '../organisms/todoDashboard';
const TodoPageTemplate = ({ user, tasks, onCompleteTask, onDeleteTask, onEditProfile, onSignOut }) => {
    return (
        <div className="flex gap-4 p-8 bg-[#0f0f0f] min-h-screen">
            <div className="w-1/4">
                <ProfileCard user={user} onEditProfile={onEditProfile} onSignOut={onSignOut} />
            </div>
            <div className="w-3/4">
                <TodoDashboard
                    tasks={tasks}
                    onCompleteTask={onCompleteTask}
                    onDeleteTask={onDeleteTask}
                />
            </div>
        </div>
    );
};

export default TodoPageTemplate;
