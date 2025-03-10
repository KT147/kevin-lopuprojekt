import { useRef, useEffect, useState } from 'react'
import './snake.css'

function Snake() {

    const canvasRef = useRef(null)
    const [snake, setSnake] = useState([{ x: 10, y: 10 }])
    const [food, setFood] = useState({ x: 5, y: 5 })

    const [direction, setDirection] = useState("RIGHT")

    useEffect(() => {
        const gameInterval = setInterval(() => {
            moveSnake()
            drawGame()
        }, 100)
        
        return () => clearInterval(gameInterval)
    }, [snake, direction, food])

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    case "w":
                    if (direction !== 'DOWN') setDirection('UP');
                    break
                case 'ArrowDown': 
                    case "s": 
                    if (direction !== 'UP') setDirection('DOWN');
                    break
                case 'ArrowLeft': 
                    case "a": 
                    if (direction !== 'RIGHT') setDirection('LEFT');
                    break
                case 'ArrowRight':
                    case "d":  
                    if (direction !== 'LEFT') setDirection('RIGHT');
                    break
                default:
                    break
            }
        }
    
        window.addEventListener('keydown', handleKeyDown)
    
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [direction])
    

    const drawGame = () => {
        const context = canvasRef.current.getContext("2d")
        context.canvas.width = 500
        context.canvas.height = 500

        context.clearRect(0,0, context.canvas.width, context.canvas.height)
        
        context.fillStyle = "green"
        context.fillRect(food.x * 20, food.y * 20,   20,20)

        context.fillStyle = "blue"
        snake.forEach(segment => {
            context.fillRect(segment.x * 20, segment.y * 20,   20,20)
            })
        }
        
    const moveSnake = () => {
        const newSnake = [...snake]
        const head = { ...newSnake[0] }

        switch (direction) {
            case 'UP':
              head.y -= 1;
              break;
            case 'DOWN':
              head.y += 1;
              break;
            case 'LEFT':
              head.x -= 1;
              break;
            case 'RIGHT':
              head.x += 1;
              break;
            default:
              break;
          }

        newSnake.unshift(head)
        if (!(head.x === food.x && head.y === food.y)) {
            newSnake.pop()
        } else {
            generateFood() 
        }

        setSnake(newSnake)
        checkForFood()
        checkForWallCollision()
        checkForSelfCollision()
    }

    // unshift lisab uue elemendi algusesse

    const checkForFood = () => {
        const head = snake [0]

        if (head.x === food.x && head.y === food.y){
            setSnake(prevSnake => {
                const newSnake = [...prevSnake]
                const newSegment = { ...newSnake[newSnake.length-1] }
                newSnake.push(newSegment)
                return newSnake
            })
            generateFood()
        }
    }

    const generateFood = () => {
        const randomX = Math.floor(Math.random() * (canvasRef.current.width / 20 - 2)) + 1
        const randomY = Math.floor(Math.random() * (canvasRef.current.height / 20 - 2)) + 1

        setFood({ x:randomX, y:randomY})
    }

    const gameOver = () => {
        setSnake([{ x: 10, y: 10 }])
        setFood({ x: 5, y: 5 })
        setDirection("RIGHT")
        alert('Mäng läbi!')
    }

    const checkForWallCollision = () => {
        const head = snake[0]
        if (head.x < 0 || head.x >= canvasRef.current.width / 20 || head.y < 0 || head.y >= canvasRef.current.height / 20) {
            gameOver()
        }
    }

    const checkForSelfCollision = () => {
        const head = snake[0]
        for (let i = 1; i < snake.length; i++) {
            if (snake[i].x === head.x && snake[i].y === head.y) {
                gameOver()
            }
        }
    }
    

  return (
    <div className='game-container'>
        <canvas ref={canvasRef} className='canvas'></canvas>
        <button className='button' onClick={() => setDirection('UP')}>↑</button>
        <span><button className='button' onClick={() => setDirection('LEFT')}>←</button>
        <button className='button-right' onClick={() => setDirection('RIGHT')}>→</button></span>
        <button className='button' onClick={() => setDirection('DOWN')}>↓</button>
    </div>
  )
}

export default Snake