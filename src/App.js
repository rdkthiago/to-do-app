import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import GithubSearch from './components/GithubSearch';

function App() {
  const [tasksUpdated, setTasksUpdated] = React.useState(false);

  const handleTaskAdded = () => {
    setTasksUpdated(!tasksUpdated);
  };

  return (
    <div className="App">
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList key={tasksUpdated} />
      <GithubSearch/>
    </div>
    
  );
}

export default App;

