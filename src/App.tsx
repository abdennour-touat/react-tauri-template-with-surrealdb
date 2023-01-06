import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { ipc_invoke } from "./ipc";
import { projectFmc } from "./model";
import { Typography } from "@mui/material";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }
  async function createProject() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // projectFmc.create({ name: "test" });
    let res = await projectFmc.list();
    console.log(res);
  }

  return (
    <div>
      <Typography variant="h3">
        hello world this is a react+mui+react-router+ tauri+rust+surrealdb
      </Typography>
    </div>
  );
}

export default App;
