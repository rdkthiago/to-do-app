import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material';
import api from '../services/api';

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks', { titulo: title, descricao: description });
      setTitle('');
      setDescription('');
      onTaskAdded();
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  return (
    <Card variant="outlined" style={{ marginBottom: '1em' }}>
      <CardContent>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <TextField
            label="Título"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!title.trim()}
          >
            Adicionar Tarefa
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default TaskForm;
