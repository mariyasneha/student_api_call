import React from 'react'
import { Link } from 'react-router-dom'

const StudentNavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/login">LoginPage</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">AddStudents</Link>
        <Link class="nav-link" to="/search">SearchStudent</Link>
        <Link class="nav-link" to="/delete">DeleteStudent</Link>
        <Link class="nav-link" to="/viewall" >ViewAllStudents</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default StudentNavBar