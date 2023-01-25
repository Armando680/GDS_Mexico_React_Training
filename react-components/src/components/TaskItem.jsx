import "./TaskItem.scss"
import Badge from "./Badge";

const TaskItem = (props) => {

    const { task, onTaskClick } = props;

    return (
        <div className="list-group-item" onClick={() => onTaskClick(task)}>
            <div className="task-header">{task.header}</div>
            <div className="task-info">
                <label>{task.title}</label>
                <Badge amount={task.amount} />
            </div>
        </div>
    )
}

export default TaskItem;