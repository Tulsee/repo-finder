import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import UserDetail from '../components/UserDetail';
import { getUserDataByUsername } from '../api/index';

const HomePage = () => {
  const [username, setUsername] = useState();
  const [data, setData] = useState([]);
  const getUsername = (name) => {
    setUsername(name);
  };
  // console.log(username);
  useEffect(() => {
    getUserDataByUsername(username).then((res) => {
      setData(res?.data);
      // console.log(res?.data);
    });
  }, [username]);
  return (
    <>
      <SearchBox getText={getUsername} data={data} />
      {data == 'undefined' ? (
        <h1 className='text-center'>
          Please enter username to see their github account detail
        </h1>
      ) : (
        <UserDetail />
      )}
    </>
  );
};
export default HomePage;
