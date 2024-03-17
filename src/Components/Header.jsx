import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

 function Header() {
  return (
    <>
      <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='fst-italic fw-bolder text-light'>
          <i class="fa-solid fa-user-doctor fa-beat-fade"></i> &nbsp;
            Doctor Appointment
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
export default Header;