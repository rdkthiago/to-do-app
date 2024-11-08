import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import GithubSearch from './components/GithubSearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
      <Router>
        <Routes>
          <Route path="/github-search" element={<GithubSearch/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;

