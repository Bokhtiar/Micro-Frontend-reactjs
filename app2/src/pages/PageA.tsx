import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function PageA() {

  interface IPost {
    id: string,
    title: string,
  }


  const [data, setData] = useState<IPost[] | []>([])

  const fetchData = useCallback(async()=> {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json))
    } catch (error) {
      console.log(error);
    }
  },[])

  useEffect(()=> {
    fetchData()
  },[])

  return (
    <React.Fragment>
      <div>Page 1 from App2 </div>
  

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((el, i) => {
              return <tr>
                <th scope="row">{el?.id}</th>
                <td>{el.title}</td>
                <td>
                  <Link className='btn btn-sm btn-success btn-sm' to="/page-show">Show</Link>
                </td>
              </tr>
            })
          }
          
         
        </tbody>
      </table>
    </React.Fragment>
  );
}