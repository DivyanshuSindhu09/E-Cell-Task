import axios from 'axios'
import React, { useState } from 'react'
import Loading from './Loading'
import AllStartups from './AllStartups'
import StartupModal from './StartupModal'

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
    <header>
        <nav className='w-full font-[absans] flex items-center justify-between px-7 py-2'>
            <span className='text-2xl font-[acma]'>StartupHub</span>
            <div className='w-[35%] flex gap-2 border-2 border-black rounded-lg'>
            <input 
            id='input' 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={handleSearch}
            placeholder='Search for a startup' 
            className='px-2 py-1 w-full input' />
            <button
            onClick={handleSearchButton}
            className='px-2 py-1 text-2xl'> <i className="ri-search-2-line"></i> </button>
            </div>
            <button
            onClick={()=>setModalOpen(true)}
            className='border-2 border-amber-950 px-2 py-1'>Add Your Idea</button>
        </nav>
    </header>
    <AllStartups startups={startups} input={input} />
    <StartupModal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
    </>
  ) 
}

export default Landing