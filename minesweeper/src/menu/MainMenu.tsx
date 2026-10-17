import { Link } from "react-router-dom"

function main_menu() {
        return (
      <>
      <section id="center">
        
        <div>
          <h1>Welcome to minesweeper!</h1>
          <Link to="/create">
        <button>New Game</button>
          </Link>
        </div>
        
      </section>

    </>
  )
}

export default main_menu


