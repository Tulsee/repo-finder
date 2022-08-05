import React from 'react';

const UserDetail = () => {
  return (
    <>
      <div className='card border-primary mb-3'>
        <div className='card-header'>
          <h3>name</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-3'>
              <img className='img-thumbnail avatar' src='' alt='' />
              <a target='_blank' className='btn btn-primary btn-block' href='='>
                View Profile
              </a>
            </div>
            <div className='col-md-9'>
              <span className='badge badge-dark'>Public Repos: </span>
              <span className='badge badge-primary'>Public Gists: </span>
              <span className='badge badge-success'>Followers: </span>
              <span className='badge badge-info'>Following: </span>
              <br />
              <br />
              <ul className='list-group'>
                <li className='list-group-item'>Company: </li>
                <li className='list-group-item'>
                  Website/blog: <a href='' target='_blank'></a>
                </li>
                <li className='list-group-item'>Location:</li>
                <li className='list-group-item'>Member Since: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h3 className='page-header'>Latest Repos</h3>
      <div id='repos'></div>
    </>
  );
};

export default UserDetail;
