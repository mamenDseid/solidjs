import logo from './logo.svg';
import styles from './App.module.css';
import { Button } from "@suid/material";
import { Routes, Route } from "@solidjs/router"

import Home from "./pages/Home"
import Users from "./pages/Users"
function App() {
  return (
    <div class={styles.App}>
        
      <Routes>
        <Route path="/users" component={Users} />
        <Route path="/" component={Home} />
        <Route path="/about" element={<div>This site was made with Solid</div>} />
      </Routes>
    </div>
  );
}

export default App;
