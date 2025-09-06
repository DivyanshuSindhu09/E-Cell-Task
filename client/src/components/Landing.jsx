import axios from 'axios'
import React, { useState } from 'react'
import Loading from './Loading'
import AllStartups from './AllStartups'
import StartupModal from './StartupModal'
import {motion} from 'motion/react'

const Landing = () => {
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState("")
    const [startups, setStartups] = useState([])
    const [modalOpen, setModalOpen] = useState(false)

    const handleSearch = async (e) => {
        if(e.key === "Enter"){
            setStartups([])
            setLoading(true)
            const response = await axios.post("http://localhost:4000/api/v1/startups/search", {input})
            const data = response.data.data
            response.statusText === "OK" && setStartups(data)
            setLoading(false)
        }
    }

    const handleSearchButton = async () => {
            setStartups([])
            setLoading(true)
            const response = await axios.post("http://localhost:4000/api/v1/startups/search", {input})
            const data = response.data.data
            response.statusText === "OK" && setStartups(data)
            setLoading(false)
    }
    
  return loading ? <Loading/> : (
    <>
        <section className='max-h-screen overflow-y-auto no-scrollbar'>
                <header>
            <nav className='w-full font-[absans] z-9999 sticky pt-6 flex items-center justify-between px-7 py-2'>
                <span className='text-4xl text-white font-[acma]'>StartupHub</span>
                <div className='w-[35%] flex gap-2 border-2 border-white rounded-lg'>
                <input 
                id='input' 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={handleSearch}
                placeholder='Search for a startup' 
                className='px-2 py-1 w-full input text-white' />
                <button
                onClick={handleSearchButton}
                className='px-2 py-1 text-2xl'> <i className="text-white ri-search-2-line"></i> </button>
                </div>
                <motion.button
                whileHover={{
                scale: 1.05,
                boxShadow : '0px 20px 50px rgba(8,112,184,0.7)'
                }}
                transition={{
                duration : 0.3,
                ease : 'easeInOut'
                }}
                onClick={()=>setModalOpen(true)}
                className='relative text-neutral-300 px-12 py-4 rounded-lg bg-slate-950/80 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]'>Add Your Idea
                <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-full mx-auto'></span>
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[8px] w-full mx-auto blur-sm'></span>
                </motion.button>
            </nav>
        </header>
        
        <AllStartups startups={startups} input={input} />
        
        <StartupModal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
        </section>
        <section className='w-screen transform  absolute inset-0 '>
        <div className="absolute w-72 top-20 left-10 h-72 blur-3xl opacity-30 animate-pulse transition-all rounded-full bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 shadow-lg"></div>
        <div className="absolute w-130 h-130 blur-3xl opacity-30 top-1/3 right-10 animate-pulse transition-all rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-800 shadow-lg"></div>
        <div className="absolute w-64 h-64 bottom-20 left-1/4 blur-3xl opacity-30 animate-pulse transition-all rounded-full bg-gradient-to-tr from-[#f12711] to-[#f5af19] shadow-lg"></div>
        <div className="absolute w-80 h-80 bottom-1/3 right-1/3 blur-3xl opacity-30 animate-pulse transition-all rounded-full bg-gradient-to-r from-[#43cea2] to-[#185a9d] shadow-lg"></div>
    </section>
    </>
  ) 
}

export default Landing