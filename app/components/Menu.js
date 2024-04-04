const Menu = () => {
    return (
      <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="/" className="nav-item nav-link active">
          Home
        </a>
        <a href="/about" className="nav-item nav-link">
          About Us
        </a>
        <a href="/product" className="nav-item nav-link">
          Products
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu m-0">
            <a href="/pages/blog" className="dropdown-item">
              Blog Grid
            </a>
            <a href="/pages/feature" className="dropdown-item">
              Our Features
            </a>
            <a href="/pages/testimonial" className="dropdown-item">
              Testimonial
            </a>
            <a href="/pages/404" className="dropdown-item">
              404 Page
            </a>
          </div>
        </div>
        <a href="/contact" className="nav-item nav-link">
          Contact Us
        </a>
      </div>
      <div className="d-none d-lg-flex ms-2">
        <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
          <small className="fa fa-search text-body" />
        </a>
        <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
          <small className="fa fa-user text-body" />
        </a>
        <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
          <small className="fa fa-shopping-bag text-body" />
        </a>
      </div>
    </div>
    )
}

export default Menu