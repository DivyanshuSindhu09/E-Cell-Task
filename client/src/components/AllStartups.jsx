import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'
import CardComponent from './CardComponent'
import StartupModal from './StartupModal'

const AllStartups = ({startups, input, setModalOpen, modalOpen}) => {

    const [allStartups, setAllStartups] = useState([])
    const [loading, setLoading] = useState(true);

    const getStartups = async() => {
        try {
            const response = await axios.get("http://localhost:4000/api/v1/startups/allstartups")
            console.log(response.data.data)
            if(input.trim() === "" && startups.length === 0){
                setAllStartups(response.data.data)
            }
            setLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    const refreshStartups = async () => {
        const response = await axios.get("http://localhost:4000/api/v1/startups/allstartups")
        setAllStartups(response.data.data)
    }

    useEffect(()=>{
        getStartups()
        if(startups && startups.length > 0){
            setAllStartups(startups)
        }
    },[startups])
    
  return loading ? <Loading/> : (
    <>
    <section className='text-white relative z-1000 mt-6 px-25 py-10 no-scrollbar no-scrollbar mx-auto'>
        
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                allStartups.map((startup) => (
                    <CardComponent key={startup._id} spotlightColor="rgba(0, 229, 255, 0.2)">
                        <div className='flex items-center gap-4'>
                            <img
                            className='w-15 h-15 object-cover rounded-full'
                            src={startup.logo} alt="" />
                            <span>
                                <p className='font-[acma] text-2xl'>{startup.name}</p>
                                <p className='font-[absans]'> {startup.tags.join(',')} </p>
                            </span>
                        </div>
                        <div className=''>
                        <p
                        id='description'
                        className='font-[absans] mt-4'> {startup.description.slice(0,150)}... </p>
                        </div>
                        <div  className='flex justify-end'>
                            <a
                            className='bg-white px-4 py-1 rounded-lg text-black font-[absans] mt-4'
                            target='_blank' href={startup.url}>Know More</a>
                        </div>
                    </CardComponent>
                ))
            }
            </div>
    </section>
        {
            modalOpen && <StartupModal setModalOpen={setModalOpen} refreshStartups={refreshStartups} modalOpen={modalOpen}/>
        }
    
    </>
  )
}

export default AllStartups