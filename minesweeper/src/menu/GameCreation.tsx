import { useNavigate } from "react-router-dom";
function game_creation() {
    const navigate = useNavigate();

    return (
      <>
      <section id="center">
        
        <div>
          <h1>This is fucking game creation</h1>
          <button onClick={() => navigate('/play')}>
                        Start Game
                    </button>
        </div>
        
      </section>

    </>
  )
}

export default game_creation


