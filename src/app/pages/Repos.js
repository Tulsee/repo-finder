import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserRepoByUsername, getUserDataByUsername } from '../api/index';

const Repos = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getUserRepoByUsername(username).then((res) => {
      console.log(res.data);
      setRepos(res.data);
    });
  }, [username]);

  return (
    <>
      <div className='font-bold m-5 text-lg border border-5 rounded-full text-center'>
        repos of {username}
      </div>
      <div className='container m-3 mr-3'>
        <table className='table table-striped table-auto'>
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>No. of open issues</th>
              <th>default branch</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {repos?.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td>{repo.open_issues_count}</td>
                <td>{repo.default_branch}</td>
                <td>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className=' btn btn-warning rounded-full text-black'
                    href={repo.html_url}
                  >
                    {' '}
                    View in github
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Repos;
