import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'


function Home() {
  const [doctor,setDoctor] = useState([])
  const base_url = "https://doctor-appointment-app-backend-lxx4.onrender.com/doctors"
  const api_fetching = async()=>{
    const response = await axios.get(base_url)
    console.log(response.data);
    setDoctor(response.data)
  }
  console.log(doctor);
  useEffect(()=>{
    api_fetching()
  },[])

  return (
    <div>
      <Cards DoctorData={doctor}/>
    </div>
  )
}

export default Home