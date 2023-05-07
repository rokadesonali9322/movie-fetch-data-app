import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ShowMovie.css'
import { Link } from 'react-router-dom'
import BeatLoader from 'react-spinners/BeatLoader'

function ShowMovie() {
  const [getMovie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      const getmoviedata = async () => {
        try {
          const res = await axios.get(
            'https://api.tvmaze.com/search/shows?q=all ',
          )
          const data = await res?.data
          setMovie(data)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }
      getmoviedata()
    }, 1000)
  }, [])

  return (
    <div className="container-fluid py-3">
      {loading ? (
        <div className="center_loading">
          {/* <span>Loading...</span> */}
          <BeatLoader color={'#333'} loading={loading} size={25} />
        </div>
      ) : (
        <>
          <h2 className="text-center pb-3"> Show The Movie</h2>
          <div className="row card-con">
            {getMovie.map((curele) => {
              const {
                id,
                name,
                type,
                language,
                image,
                network,
                rating,
              } = curele.show
              return (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-10"
                  key={id}
                >
                  <div className="card showcard">
                    <img
                      className="card-img-top"
                      src={image?.original}
                      alt={image?.original}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center">{name}</h4>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-10">
                          <p className="card-text">Language: {language}</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-10">
                          <p className="card-text">Type: {type}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-block m-auto">
                          <p className="card-text text-center pt-2 pb-0">
                            Country name: {network?.country?.name}
                          </p>
                          <p className="card-text  text-center pt-0!important pb-4">
                            Rating: {rating?.average}
                          </p>
                        </div>
                      </div>
                      <Link to={`/showsumary/${id}`}>
                        <button className="btn btn-info my-3 d-block m-auto">
                          {' '}
                          View Summary
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default ShowMovie
