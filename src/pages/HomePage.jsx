import { Link } from "react-router-dom"
import './homepage.css'


function HomePage() {
  return (
    <div className="home-container">
        <Link to="/guess-number">
            <div>
                <button className="home-button">
                    <img className="homepage-pic" src="/homepage_pictures/numbrimang-esileht.png" alt="" />
                    <div className="home-text">SAARLASE NUMBRIMÄNG</div>
                </button>
            </div>
        </Link>

        <Link to="/memory-game">
            <div>
                <button className="home-button">
                    <img className="homepage-pic" src="/homepage_pictures/memory.jpg" alt="" />
                    <div className="home-text">MÄLUMÄNG</div>
                </button>
            </div>
        </Link>

        <Link to="/rock-paper-scissors">
            <div>
                <button className="home-button">
                    <img className="homepage-pic" src="/homepage_pictures/rps.jpg" alt="" />
                    <div className="home-text">KIVI-PABER-KÄÄRID</div>
                </button>
            </div>
        </Link>

        <Link to="/hangman">
            <div>
                <button className="home-button">
                    <img className="homepage-pic" src="/homepage_pictures/hangman.jpeg" alt="" />
                    <div className="home-text">SÕNAMÄNG</div>
                </button>
            </div>
        </Link>

        <Link to="/math-game">
            <div>
                <button className="home-button">
                    <img className="homepage-pic" src="/homepage_pictures/calculating.jpg" alt="" />
                    <div className="home-text">PEASTARVUTAMINE</div>
                </button>
            </div>
        </Link>

        <Link to="/blackjack">
            <div>
                <button className="home-button">
                    <img className="homepage-pic" src="/homepage_pictures/blackjack.jpg" alt="" />
                    <div className="home-text">BLACKJACK</div>
                </button>
            </div>
        </Link>

        <Link to="/do-you-remember">
            <div>
                <button className="home-button">
                    <img className="homepage-pic" src="/homepage_pictures/test-memory.jpg" alt="" />
                    <div className="home-text">TESTI OMA MÄLU</div>
                </button>
            </div>
        </Link>

        <Link to="/snake">
            <div>
                <button className="home-button">
                    <img className="homepage-pic" src="/homepage_pictures/snake.png" alt="" />
                    <div className="home-text">USSIMÄNG</div>
                </button>
            </div>
        </Link>

        <Link to="/slide-puzzle">
            <div>
                <button className="home-button">
                    <img className="homepage-pic" src="/homepage_pictures/number-puzzle.png" alt="" />
                    <div className="home-text">NUMBRIPUSLE</div>
                </button>
            </div>
        </Link>

        <Link to="/facts">
            <div>
                <button className="home-button">
                    <img className="homepage-pic" src="/homepage_pictures/facts.png" alt="" />
                    <div className="home-text">HUVITAVAT JA NALJA</div>
                </button>
            </div>
        </Link>
    </div>
  )
}

export default HomePage