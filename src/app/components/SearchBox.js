import React, { useState } from 'react';

const SearchBox = ({ getText, data }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
    getText(value);
  };
  // console.log(data?.name);
  return (
    <>
      <div className='container text-center mt-3'>
        <div className='container'>
          <h1>Search Github Users</h1>
          <p className='lead'>Enter a username to fetch a users profile info</p>
          <input
            type='text'
            id='searchUser'
            className='form-control'
            placeholder='Github Username...'
            value={text}
            onChange={handleChange}
          />
        </div>
        <br />
      </div>
    </>
  );
};

export default SearchBox;
