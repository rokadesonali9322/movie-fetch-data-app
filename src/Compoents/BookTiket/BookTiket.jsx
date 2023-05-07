import React, { useState } from 'react'
import './BookTiket.css'
import { useNavigate } from 'react-router-dom'

const BookTiket = () => {
  const Navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handlesubmitdata = (e) => {
    e.preventDefault()
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('phone', phone)
    alert('Your ticket has been booked!')
    Navigate('/')
  }

  return (
    <div className="container-fluid p-5">
      <div className="form-card">
        <h2 className="text-center">Book a ticket for </h2>
        <form className="w-100 m-auto" onSubmit={handlesubmitdata}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group ">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group w-25 m-auto py-4">
            <button type="submit" className="btn btn-primary">
              Book Tiket
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookTiket
