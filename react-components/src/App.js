import './App.scss';

import Tasks from './components/Tasks';

import TaskItem from './components/TaskItem';
import TaskItemCC from './components/TaskItemCC';

import Badge from './components/Badge';

const App = () => {

  const tasks = [
    {
      id: 1,
      header: "23/12/2023",
      title: "Car Insurance",
      amount: "243.30",
    },
    {
      id: 2,
      header: "Task Item 2",
      title: "New Desk",
      amount: "299.50",
    },
    {
      id: 3,
      header: "Task Item 3",
      title: "Electricity Bill",
      amount: "56.89",
    },
    {
      id: 4,
      header: "Task Item 2",
      title: "Home Repairs",
      amount: "1299.50",
    }
  ]

  const handleTaskClick = (task) => {
    console.log(task);
  }

  return (
    <div className="App">
      {/* <Badge amount="234234" /> */}
      {/* <TaskItemCC />  */}

      {/* <div>
        <TaskItem task={tasks[0]} />
        <TaskItem task={tasks[1]} />
        <TaskItem task={tasks[2]} />
        <TaskItem task={tasks[3]} />
      </div> */}

      {/* <div className='list-group'>
        <div>Home Expenses</div>
        {tasks.map((task) => <TaskItem task={task} />)}
        <div>You have {tasks.length} tasks.</div>
      </div> */}

      <Tasks title="House Expenses" footer={<div>You have {tasks.length} tasks.</div>}  >
        {tasks.map((task) => <TaskItem key={task.id} task={task} onTaskClick={handleTaskClick} />)}
      </Tasks>

    </div>
  );
}

export default App;


