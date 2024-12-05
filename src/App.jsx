import './App.css'
import { ThemeProvider } from './common/ThemeContext'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'


function App() {
  return (
    <> 
      <ThemeProvider>
        <Hero /> 
        <Projects />
      </ThemeProvider>
    </>
  )
}

export default App
