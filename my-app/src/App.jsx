import { createEffect, createSignal } from "solid-js";
import Nav from "./components/Nav";

 function App() {
  const [username, setUserName] = createSignal('ebenezerdon')
  const [repos, setRepos] = createSignal([])
  
  createEffect(async () => {
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
    setRepos(await res.json())
  })
  return (
    <div class="container">
      <h4>Hello world</h4>
      <Nav/>
    </div>
  );
}
  export default App;
