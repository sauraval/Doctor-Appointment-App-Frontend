import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

 function Cards({DoctorData}) {
  console.log(DoctorData);
  return (
   <div>
    <div className='row w-75'>
      {
        DoctorData.map(item=>(
          <div className="col m-3 my-4 ">
       <Link to={`/view/${item.id}`} className='text-decoration-none '>
       <Card style={{ width: '22rem', height: '200px',textAlign:'center' }} className='bg-dark'>
                  <Card.Body>
                  <h2 className='text-light'>{item.hospital}</h2>

                    <Card.Title className='text-warning'>{item.name}</Card.Title>
                    <Card.Text>
                      <p className=' text-success'>Specialized in :{item.specialty}</p>
                      <p className='text-light'>⭐{item.rating}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
       </Link>
        </div>
       )) }
    </div>
   </div>
  );
}
export default Cards;