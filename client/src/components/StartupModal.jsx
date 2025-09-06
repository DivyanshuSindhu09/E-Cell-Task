import axios from 'axios'
import React, { useState } from 'react'

const StartupModal = ({ modalOpen, setModalOpen }) => {
  const [startupForm, setStartupForm] = useState({
    name: "",
    description: "",
    tags: "",
    url: "",
    logo: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const startupData = new FormData()
      const { name, description, url, tags, logo } = startupForm

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
      <section className="fixed font-[absans] inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="relative w-[90%] max-w-2xl rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-2xl border border-white/10">
          
          
          <i
            onClick={() => setModalOpen(false)}
            className="ri-close-circle-fill absolute top-4 right-4 text-3xl text-white/70 hover:text-red-400 cursor-pointer transition-colors"
          ></i>

          
          <h2 className="text-3xl font-bold font-[acma] text-center mb-6 text-white tracking-wide">
             Add Your Startup
          </h2>

          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            

            <label htmlFor="logo" className="flex flex-col items-center cursor-pointer">
              <input
                id="logo"
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setStartupForm({ ...startupForm, logo: e.target.files[0] })}
              />
              <div className="relative group">
                <img
                  src={startupForm.logo ? URL.createObjectURL(startupForm.logo) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolS4VlcX3usdQuG4P78ITvFR3mfVvB48C0g&s"}
                  alt="Logo"
                  className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400/50 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/60 to-cyan-600/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <i className="ri-pencil-line text-white text-lg"></i>
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-300">Upload Logo</span>
            </label>

            
            <input
              className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              type="text"
              placeholder="Enter your startup's name"
              value={startupForm.name}
              onChange={(e) => setStartupForm({ ...startupForm, name: e.target.value })}
            />

            <textarea
              rows={5}
              className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
              placeholder="Add your idea"
              value={startupForm.description}
              onChange={(e) => setStartupForm({ ...startupForm, description: e.target.value })}
            />

            <input
              className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              type="text"
              placeholder="Enter a link to your startup"
              value={startupForm.url}
              onChange={(e) => setStartupForm({ ...startupForm, url: e.target.value })}
            />

            <input
              className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              type="text"
              placeholder="Enter your startup's category"
              value={startupForm.tags}
              onChange={(e) => setStartupForm({ ...startupForm, tags: e.target.value })}
            />

            
            <button className="mt-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300">
              Submit
            </button>
          </form>
        </div>
      </section>
    )
  )
}

export default StartupModal
