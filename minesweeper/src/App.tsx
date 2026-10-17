import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import welcome_screen from './menu/welcome_screen.tsx'
function App() {
  const [count, setCount] = useState(0)
  let welcome = welcome_screen();
  return (
    <>
      {welcome}
      <section id="center">
        <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
      </section>
    </>
  )
}

export default App
