import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'
import CardComponent from './CardComponent'

const AllStartups = ({startups, input}) => {

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

    useEffect(()=>{
        getStartups()
        if(startups && startups.length > 0){
            setAllStartups(startups)
        }
    },[startups])
    
  return loading ? <Loading/> : (
    <section className='text-white bg-red-50 max-w-6xl mx-auto'>
        
            <div className='grid grid-cols-4'>
                {
                allStartups.map((startup) => (
                    <CardComponent key={startup._id} spotlightColor="rgba(0, 229, 255, 0.2)">
                        <div className='flex items-center gap-4'>
                            <img
                            className='w-15 h-15 object-cover rounded-full'
                            src={startup.logo} alt="" />
                            <span>
                                <p className='font-[acma] text-3xl'>{startup.name}</p>
                                <p className='font-[absans] text-lg'> {startup.tags.join(',')} </p>
                            </span>
                        </div>
                        <p className='font-[absans] mt-4'> {startup.description.slice(0,175)}... <span className='cursor-pointer text-blue-500'>Read More</span> </p>
                    </CardComponent>
                ))
            }
            </div>
        
    </section>
  )
}

export default AllStartups