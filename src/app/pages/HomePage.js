import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import { getUserDataByUsername } from '../api/index';
import UserProfile from './UserProfile';

const HomePage = () => {
  const [username, setUsername] = useState();
  const [data, setData] = useState({});
  const getUsername = (name) => {
    setUsername(name);
  };
  // console.log(username);
  useEffect(() => {
    getUserDataByUsername(username || '').then((res) => {
      setData(res?.data);
    });
  }, [username]);
  console.log(data);
  return (
    <>
      <SearchBox getText={getUsername} data={data} />
      {data ? (
        <UserProfile data={data} username={username} />
      ) : (
        <>
          <h1 className='text-center'>
            Please enter username to see their github account detail
          </h1>
        </>
      )}
    </>
  );
};
export default HomePage;
