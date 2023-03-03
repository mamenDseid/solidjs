import { repos, setUserName, username } from '../App'

function Home() {
  const refetchWithUsername = (e) => {
    e.preventDefault()
    const usernameInput = document.querySelector('#usernameInput')
    setUserName(usernameInput.value)
  }
  return (
    <div>
      <form class='class="mb-3'
        onSubmit={(e) => refetchWithUsername(e)}
      >
        <input type="text" class="p-1 align-middle" placeholder="Type username..." id="usernameInput" required />

        <button class="btn btn-dark ms-3 w-auto" type="submit">
          Fetch
        </button>
      </form>
    </div>
  );
}
export default Home;