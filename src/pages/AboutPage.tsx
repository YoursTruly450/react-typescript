import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {

  const navigate = useNavigate();

  const backHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate('/');
  }

  return (
    <>
      <h1>Information page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint impedit dolorum officiis quidem delectus totam ad! Nostrum labore ipsum unde totam aperiam numquam, ea nihil nulla libero reiciendis nobis?</p>
      <button className='btn' onClick={backHandler}>Back to TodoList</button>
    </>
  )
}