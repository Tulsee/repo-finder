import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = ({ data, username }) => {
  return (
    <>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-wrap -mx-4 mb-20'>
          <div className='w-full lg:w-1/0.2 px-4 mb-4 lg:mb-0'>
            <div className='bg-gray-600 rounded-b-lg'>
              <div className='flex justify-center'>
                <img
                  className='w-56 h-56 rounded-full mt-2'
                  src={data.avatar_url}
                  alt=''
                />
              </div>
              <div className='px-14 py-8'>
                <div className='mb-6 py-px bg-gray-500'></div>
                <h4 className='mb-8 lg:mb-4  text-white font-bold'>
                  Name: <span>{data.name}</span>
                </h4>
                <div className='mb-6 py-px bg-gray-500'></div>
                <h4 className='mb-8 lg:mb-4  text-white font-bold'>
                  Bio: <span>{data.bio}</span>
                </h4>
                <div className='mb-6 py-px bg-gray-500'></div>
                <h4 className='mb-8 lg:mb-4  text-white font-bold'>
                  Company: <span>{data.company}</span>
                </h4>
                <div className='mb-6 py-px bg-gray-500'></div>
                <h4 className='mb-8 lg:mb-4  text-white font-bold'>
                  Location: <span>{data.location}</span>
                </h4>

                <div className='mb-6 py-px bg-gray-500'></div>
                <h4 className='mb-8 lg:mb-4  text-white font-bold'>
                  Followers: <span>{data.followers}</span>
                </h4>

                <div className='mb-6 py-px bg-gray-500'></div>
                <h4 className='mb-8 lg:mb-4  text-white font-bold'>
                  Following: <span>{data.following}</span>
                </h4>

                <div className='mb-6 py-px bg-gray-500'></div>
                <h4 className='mb-8 lg:mb-4  text-white font-bold'>
                  Repositories:{' '}
                  <span className='ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800'>
                    {data?.public_repos ? data?.public_repos : 'N/A'}
                  </span>
                </h4>

                <div className='mb-6 py-px bg-gray-500'></div>
                <h4 className='mb-8 lg:mb-4  text-white font-bold'>
                  Gists:{' '}
                  <span className='ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800'>
                    {data?.public_gists ? data?.public_gists : 'N/A'}
                  </span>
                </h4>
                <div className='mb-6 py-px bg-gray-500'></div>
                <div className='md:text-center'>
                  <Link
                    to={`/repos/${username}`}
                    className='inline-block px-12 py-4 border border-gray-300 mr-2 btn-info  rounded-full font-bold text-white'
                  >
                    View Repos
                  </Link>

                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={data.html_url}
                    className='inline-block px-12 py-4 border border-gray-300 btn-warning hover:border-gray-200 rounded-full font-bold text-white'
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4'>
            {/* {reposList?.name !== 'Error' &&
              reposList?.map((repo) => (
                <>
                  <div className='py-6 px-8 mb-4 bg-gray-600 rounded-lg'>
                    <div className='flex items-center'>
                      <a
                        target='_blank'
                        href={repo?.html_url}
                        className='text-lg  text-indigo-400'
                      >
                        {repo?.name}
                      </a>
                    </div>
                  </div>
                </>
              ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
