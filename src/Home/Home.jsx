import React from 'react'
import Hero from '../Componentes/Hero/Hero.jsx'
import { About } from '../Componentes/About/About.jsx'
import { Skills } from '../Componentes/Skills/Skills.jsx'
import { Portfolio } from '../Componentes/Portfolio/Portfolio.jsx'
import { ContacForm } from '../Componentes/ContactForm/ContactForm.jsx'


export const Home = () => {
  return (
    <div className='home'>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
    <ContacForm/>
    </div>
  )
}

export default Home