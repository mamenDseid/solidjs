import { Route, Routes } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import Nav from "./components/Nav";
import SavedRepos from "./pages/SavedRepos";

 function App() {
  const [username, setUserName] = createSignal('ebenezerdon')
  const [repos, setRepos] = createSignal([])
  
  createEffect(async () => {
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
    setRepos(await res.json())
  })
  return (
    <div class="container">
      
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favrepos" element={<SavedRepos />} />
      </Routes>
    </div>
  );
}

export { username, setUserName, repos }
  export default App;
