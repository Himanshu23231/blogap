import React from 'react'
import { Link } from 'react-router-dom'
import { GiOpenedFoodCan } from "react-icons/gi";

const Navbarpage = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/"}>Homepage</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/"}>{<GiOpenedFoodCan />}</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbarpage
