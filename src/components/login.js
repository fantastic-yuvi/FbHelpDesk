import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ClientDesk } from './clientDesk';
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
export const Login = () => {
    const [profile, setProfile] = useState(null);
    const navigate =useNavigate();
    return (
      <div >
        {!profile ? (
          <div className='flex justify-center items-center w-full h-[600px]'>
         
          <LoginSocialFacebook
            appId="939032253920658"
            onResolve={(response) => {
              console.log(response);
              setProfile(response.data);
            }}
            onReject={(error) => {
              console.log(error);
            }}
          >
            
            <FacebookLoginButton/>
            </LoginSocialFacebook>
           
            </div>
        ) : (
          <></>
        )}
  
        {profile ? (
          <ClientDesk username={profile.name} photo={profile.picture.data.url}/>
          
        ) : (
          <h1 className="text-xl text-center "> If Dont Have Facebook Account  <span className="text-blue-500 "> <a href="https://www.facebook.com/" target="__blank">Click Here To Sign Up for Facebook </a></span></h1>
        )}
      </div>
     
    );
}
