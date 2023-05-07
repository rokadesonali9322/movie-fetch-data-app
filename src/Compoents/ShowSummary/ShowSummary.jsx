import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ShowSummary.css'
import BeatLoader from 'react-spinners/BeatLoader'

function ShowSummary() {
  const { id } = useParams()
  const [show, setShow] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      const fetsummary = async () => {
        try {
          const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
          console.log(res?.data?.summary)
          const newdata = await res?.data
          setShow(newdata)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }
      fetsummary()
    }, 1000)
  }, [id])

  return (
    <div className="container py-3 d-block m-auto">
      {loading ? (
        <div className="center_loading">
          {/* <span>Loading...</span> */}
          <BeatLoader color={'#333'} loading={loading} size={25} />
        </div>
      ) : (
        <div>
          <h2 className="text-center pb-3"> Show the Summary movie</h2>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-block m-auto">
              <div className="card summary-card">
                <img
                  className="card-img-top"
                  src={show?.image?.medium}
                  alt={show?.image?.medium}
                />
                <div className="card-body">
                  <h5 className="card-title">{show?.name}</h5>
                  <p>{show?.summary}</p>
                  <Link to="/BookTiket">
                    <button className="btn btn-primary">Book Tiket</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowSummary
