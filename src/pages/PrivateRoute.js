import React from 'react';
import { Outlet ,useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';
import styled from 'styled-components';

const PrivateRoute = ({children,...rest}) => {
  const Navigate = useNavigate()
  const {isAuthenticated,user,isLoading,error} = useAuth0()
  let isUser = isAuthenticated && user

  if(isLoading){
    return <Wrapper>
       <img src={loadingGif} alt="spinner" />
     </Wrapper>
   }
  if(isUser){
    return <Outlet/>
  }if(!isUser){
    return Navigate("/login")
  }
  if(error){
    return <Wrapper><h1>{error.message}</h1></Wrapper>
  }

  
 
};


const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;




export default PrivateRoute;
