import { Link } from "react-router-dom"


function HomePage() {
  return (
    <div>
        <Link to="/guess-number">
            <button>Saarlase numbrimäng</button>
        </Link>

        <Link to="/memory-game">
            <button>Mälumäng</button>
        </Link>
    </div>
  )
}

export default HomePage