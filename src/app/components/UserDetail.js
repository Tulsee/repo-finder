import React from 'react';
import moment from 'moment';

const UserDetail = ({ data }) => {
  return (
    <>
      <div className='card container border-primary mb-3'>
        {data.name ? (
          <div className='card-header mt-2'>
            <h3>Full Name: {data.name}</h3>
          </div>
        ) : (
          <></>
        )}

        <div className='card-body'>
          <div className='row'>
            <div className='col-md-3'>
              <img
                className='img-thumbnail avatar mb-2'
                src={data.avatar_url}
                alt=''
              />
            </div>
            <div className='col-md-9'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  Public Repos Count: {data.public_repos}{' '}
                </li>
                <li className='list-group-item'>Company: {data.company} </li>
                <li className='list-group-item'>
                  Website/blog: {data.blog} <a href='' target='_blank'></a>
                </li>
                <li className='list-group-item'>Location: {data.location}</li>
                <li className='list-group-item'>
                  Member Since: {moment(data.created_at).format('YYYY-MM-DD')}{' '}
                </li>
              </ul>
              <br />
              <a target='_blank' className='btn btn-warning btn-sm' href='='>
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
