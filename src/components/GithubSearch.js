import React, { useState, useEffect } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";

function GithubSearch() {
  const [githubUsername, setGithubUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const fetchGithubRepos = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos`);
      setRepositories(response.data);
    } catch (error) {
      console.error("Erro ao buscar repositórios:", error);
    }
  };

  const handleUsernameChange = (event) => setGithubUsername(event.target.value);

  return (
    <div>
      <div style={{ marginTop: "2em" }}>
        <TextField
          label="GitHub Username"
          variant="outlined"
          value={githubUsername}
          onChange={handleUsernameChange}
        />
        <Button variant="contained" onClick={fetchGithubRepos} style={{ marginLeft: "1em" }}>
          Pesquisar Repositórios
        </Button>
        {repositories.length > 0 && (
          <div style={{ marginTop: "2em" }}>
            <Typography variant="h5">Repositórios de {githubUsername}</Typography>
            {repositories.map((repo) => (
              <Card key={repo.id} variant="outlined" style={{ margin: "1em 0" }}>
                <CardContent>
                  <Typography variant="h6">{repo.name}</Typography>
                  <Typography color="textSecondary">{repo.description}</Typography>
                  <Typography variant="body2">🌟 {repo.stargazers_count} stars</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GithubSearch;
