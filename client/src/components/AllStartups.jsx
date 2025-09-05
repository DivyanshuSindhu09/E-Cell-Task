import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'

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
    <section>
        {
            allStartups.map((st)=>(
                <p key={st._id}> {st.name} </p>
            ))
        }
        {
            allStartups.length === 0 && !loading && <p>No startups found</p>
        }
    </section>
  )
}

export default AllStartups