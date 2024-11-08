import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Card, CardContent, Typography, Button } from '@mui/material';


function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  const toggleComplete = async (task) => {
    try {
      await api.put(`/tasks/${task.id}`, { esta_completa: !task.esta_completa });
      fetchTasks();
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  const deleteTask = async (task) => {
    try {
      await api.delete(`/tasks/${task.id}`);
      fetchTasks();
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <Card key={task.id} variant="outlined" style={{ margin: '10px 0' }}>
          <CardContent>
            <Typography variant="h6">{task.titulo}</Typography>
            <Typography variant="body2" color="textSecondary">{task.descricao}</Typography>
            <div style={{ marginTop: '10px' }}>
              <Button
                variant="contained"
                color={task.esta_completa ? 'success' : 'primary'}
                onClick={() => toggleComplete(task)}
              >
                {task.esta_completa ? 'Completa' : 'Marcar como Completa'}
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => deleteTask(task)}
                style={{ marginLeft: '10px' }}
              >
                Deletar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default TaskList;
