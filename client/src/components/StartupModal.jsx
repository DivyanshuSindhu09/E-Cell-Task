import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const StartupModal = ({modalOpen ,setModalOpen}) => {
    const [startupForm, setStartupForm] = useState({
        name : "",
        description : "",
        tags : "",
        url : "",
        logo : null
    })

    const handleSubmit =  async (e) => {
        e.preventDefault()

        try {
            const startupData = new FormData
            const {name, description, url, tags, logo} = startupForm
    
            startupData.append('name', name)
            startupData.append('description', description)
            startupData.append('url', url)
            logo && startupData.append('logo', logo)
            startupData.append('tags', tags)
    
            await axios.post("http://localhost:4000/api/v1/startups/add", startupData)
            setModalOpen(false)

            
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    modalOpen && (
        <section className='w-screen font-[absans] overflow-y-auto text-xl max-h-screen fixed top-0 left-0 right-0 bottom-0 flex flex-col z-99 items-center bg-gradient-to-br from-black/80 via-slate-900/60 to-black/80 backdrop-blur-sm'>
            <h2 className='text-4xl font-[acma] mt-2'>
                Add Your Startup
            </h2>
            <i
            onClick={() => setModalOpen(false)}
            className="text-3xl absolute top-3 right-3 ri-close-circle-fill"></i>
            <form
            onSubmit={e => {handleSubmit(e)}}
            className='flex w-[40%] flex-col gap-2'>
                <div className='flex flex-col items-start gap-3'>
                    <label
                    className='block text-sm  text-gray-200 mb-1'
                    htmlFor="logo">
                        
                        <input 
                        id='logo'
                        hidden
                        className='w-full p-3 border-2 border-gray-200 rounded-lg'
                        accept='image/*'
                        onChange={(e) => setStartupForm({...startupForm, logo : e.target.files[0]})}
                        type="file" />
                        <div className='group/profile relative cursor-pointer'>
                            <img 
                            src={startupForm.logo ? URL.createObjectURL(startupForm.logo) : ""}
                            className='w-24 h-24 rounded-full object-cover mt-2 border-2 border-cyan-400/50 shadow-lg'
                            alt="" />
                            <div className='absolute hidden group-hover/profile:flex top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-purple-600/60 to-cyan-600/60 rounded-full items-center justify-center transition-all duration-300'>
                            <i className="text-white ri-pencil-line text-lg drop-shadow-md"></i>
                            </div>
                        </div>
                    </label>
                </div>
                <input
                className='input border-2 border-black rounded-lg px-4 w-full py-1' 
                value={startupForm.name}
                onChange={(e) => {setStartupForm({...startupForm, name : e.target.value})}}
                placeholder="Enter your startup's name"
                type="text" />

                <textarea
                className='input border-2 border-black rounded-lg px-4 py-1'
                rows={8}
                placeholder='Add your idea'
                value={startupForm.description}
                onChange={(e) => setStartupForm({...startupForm, description : e.target.value})}
                />

                <input
                className='input border-2 border-black rounded-lg px-4 w-full py-1' 
                value={startupForm.url}
                onChange={(e) => {setStartupForm({...startupForm, url : e.target.value})}}
                placeholder="Enter a link to your startup"
                type="text" />

                <input
                className='input border-2 border-black rounded-lg px-4 w-full py-1' 
                value={startupForm.tags}
                onChange={(e) => {setStartupForm({...startupForm, tags : e.target.value})}}
                placeholder="Enter your startup's category"
                type="text" />

            <button className='bg-white rounded'>Submit</button>    
            </form>
        </section>
    )
  )
}

export default StartupModal