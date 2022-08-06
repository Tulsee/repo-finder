import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserRepoByUsername, getUserDataByUsername } from '../api/index';
import { Dropdown, Table, Button } from 'react-bootstrap';

const Repos = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [perPage, setPerPage] = useState(5);

  const onClick = (e) => {
    setPerPage(e.target.innerText);
  };
  useEffect(() => {
    getUserRepoByUsername(username, perPage).then((res) => {
      console.log(res.data);
      setRepos(res.data);
    });
  }, [username, perPage]);

  return (
    <div className='container'>
      <div className='font-bold m-5 text-lg border border-5 rounded-full text-center'>
        repos of {username}
      </div>
      <Dropdown className='inline'>
        <Dropdown.Toggle
          variant='success'
          className='rounded-full'
          id='dropdown-basic'
        >
          Per Page
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={onClick}>10</Dropdown.Item>
          <Dropdown.Item onClick={onClick}>25</Dropdown.Item>
          <Dropdown.Item onClick={onClick}>50</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button className='m-2 rounded-full' variant='info'>
        Showing {perPage} Repos
      </Button>{' '}
      <div className='mr-3 mt-3'>
        <Table
          striped
          bordered
          hover
          className='table table-striped table-auto'
        >
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
        </Table>
      </div>
    </div>
  );
};

export default Repos;
