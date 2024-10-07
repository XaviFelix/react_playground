import { useState } from 'react'
import Hero from './components/Hero'
import AppFeatures from './components/AppFeatures'
import Workout from './components/Workout'
import NavBar from './components/NavBar'
import ExampleComponent from './components/ExampleComponent'

// This app gets redered via the root div found in the index.html
function App() {

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
    from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
     <NavBar />
     <Hero />
     <AppFeatures />
     <Workout/>
     <ExampleComponent />
    </main>
  )
}

export default App
