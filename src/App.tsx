import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { ipc_invoke } from "./ipc";
import { projectFmc } from "./model";
import { Button, Typography } from "@mui/material";
import { Project } from "./bindings";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }
  async function listProject() {
    let res = await projectFmc.list();
    setProjects(res);
  }
  async function createProject() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    await projectFmc.create({ name: "test" });
  }

  return (
    <div>
      <Typography variant="h3">
        hello world this is a react+mui+react-router+ tauri+rust+surrealdb
      </Typography>
      <Button onClick={() => createProject()}>create</Button>
      <Button onClick={() => listProject()}>list</Button>
      {projects.map((prj) => (
        <div>
          <h3>{prj.id}</h3>
          <h3>{prj.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
