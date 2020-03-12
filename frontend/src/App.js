import React from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from './fetch/fetch';
import { useQuery } from 'react-query';

function App() {
  const { status, data, error } = useQuery('persons', () =>
    fetch(`http://localhost:777/data?page=1&size=25`)
  );
  console.log({ status, data, error });
  return (
    <div className='container'>
      {status === 'loading' ? (
        <span>Loading...</span>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        // also status === 'success', but "else" logic works, too
        <>
          {data.map(({ id, firstName, lastName, jobTitle, phone }) => (
            <div key={id} className='person-detail'>
              <div>id: {id}</div>
              <div>First Name: {firstName}</div>
              <div>Last Name: {lastName}</div>
              <div>Job Title: {jobTitle}</div>
              <div>Phone: {phone}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
