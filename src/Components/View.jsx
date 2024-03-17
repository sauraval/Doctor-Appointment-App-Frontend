import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function View() {
  const {id} = useParams()
  console.log(id);
  const base_url = 'https://doctor-appointment-app-backend-lxx4.onrender.com/doctors'
  const [viewDoctor,setViewDoctor] = useState({})
    const viewDoctorAppointment = async()=>{
      const {data}=await axios.get(`${base_url}/${id}`)
      console.log(data);
      setViewDoctor(data)
    }
    console.log(viewDoctor);
    useEffect(()=>{
      viewDoctorAppointment()
    },[])
  return (
    <div>
      <Row className='bg-dark' style={{height:'100vh'}}>
      <Col className='m-5 text-center' style={{width:'300px',height:'400px',border:'1px solid',paddingTop:'150px',boxShadow:'10px 10px 10px 0px'}}>
        <h1 className='text-primary'>{viewDoctor.hospital}</h1>
        <h3 className='text-light'>{viewDoctor.name}</h3>
      </Col>
      <Col className='m-5 text-center ' style={{width:'300px',height:'400px',paddingTop:'50px',border:'1px solid',boxShadow:'0px 10px 10px 0px'}}>
        <h3 style={{paddingBottom:'10px'}} className='text-light'>Location : {viewDoctor.address} <br /></h3>
        <h3 style={{paddingBottom:'10px'}} className='text-success'>Phone : {viewDoctor.phone} <br /></h3>
        <h3 style={{paddingBottom:'10px'}} className='text-info'>Email : {viewDoctor.email} <br /></h3>
        <h3 style={{paddingBottom:'10px'}} className='text-warning'>Available Hours : {viewDoctor.available_hours} <br /></h3>
        <h3 style={{paddingBottom:'10px'}} className='text-danger'>Available days : {viewDoctor.available_days} <br /></h3>
        <hr />
        <h3 style={{paddingBottom:'10px'}} className='text-light'>Rating : ⭐{viewDoctor.rating}</h3>
      </Col>
      </Row>
    </div>
  )
}

export default View