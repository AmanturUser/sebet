const HeaderAdmin = () => (
    <>
    <meta charSet="utf-8" />
<title>DASHMIN - Bootstrap Admin Template</title>
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<meta content="" name="keywords" />
<meta content="" name="description" />
{/* Favicon */}
<link href="/admin/img/favicon.ico" rel="icon" />
{/* Google Web Fonts */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link
  href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
{/* Icon Font Stylesheet */}
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
  rel="stylesheet"
/>
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
  rel="stylesheet"
/>
{/* Libraries Stylesheet */}
<link href="/admin/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
<link
  href="/admin/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
  rel="stylesheet"
/>
{/* Customized Bootstrap Stylesheet */}
<link href="/admin/css/bootstrap.min.css" rel="stylesheet" />
{/* Template Stylesheet */}
<link href="/admin/css/style.css" rel="stylesheet" />
<div className="container-fluid position-relative bg-white d-flex p-0">
  {/* Spinner Start */}
  <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div className="spinner-border text-primary" role="status" />
  </div>
  {/* Spinner End */}
  {/* Sidebar Start */}
  <div className="sidebar pe-4 pb-3">
    <nav className="navbar bg-light navbar-light">
      <a href="index.html" className="navbar-brand mx-4 mb-3">
        <h3 className="text-primary">
          <i className="fa fa-hashtag me-2" />
          DASHMIN
        </h3>
      </a>
      <div className="d-flex align-items-center ms-4 mb-4">
        <div className="position-relative">
          <img
            className="rounded-circle"
            src="/admin/img/user.jpg"
            alt=""
            style={{ width: 40, height: 40 }}
          />
          <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
        </div>
        <div className="ms-3">
          <h6 className="mb-0">Jhon Doe</h6>
          <span>Admin</span>
        </div>
      </div>
      <div className="navbar-nav w-100">
        <a href="/admin/dashboard" className="nav-item nav-link active">
          <i className="fa fa-tachometer-alt me-2" />
          Dashboard
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-laptop me-2" />
            Elements
          </a>
          <div className="dropdown-menu bg-transparent border-0">
            <a href="button.html" className="dropdown-item">
              Buttons
            </a>
            <a href="typography.html" className="dropdown-item">
              Typography
            </a>
            <a href="element.html" className="dropdown-item">
              Other Elements
            </a>
          </div>
        </div>
        <a href="widget.html" className="nav-item nav-link">
          <i className="fa fa-th me-2" />
          Widgets
        </a>
        <a href="form.html" className="nav-item nav-link">
          <i className="fa fa-keyboard me-2" />
          Forms
        </a>
        <a href="/admin/categories" className="nav-item nav-link">
          <i className="fa fa-table me-2" />
          Categories
        </a>
        <a href="/admin/products" className="nav-item nav-link">
          <i className="fa fa-chart-bar me-2" />
          Products
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="far fa-file-alt me-2" />
            Pages
          </a>
          <div className="dropdown-menu bg-transparent border-0">
            <a href="signin.html" className="dropdown-item">
              Sign In
            </a>
            <a href="signup.html" className="dropdown-item">
              Sign Up
            </a>
            <a href="404.html" className="dropdown-item">
              404 Error
            </a>
            <a href="blank.html" className="dropdown-item">
              Blank Page
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  {/* Sidebar End */}
  {/* Content Start */}
  <div className="content">
    {/* Navbar Start */}
    <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
      <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0">
          <i className="fa fa-hashtag" />
        </h2>
      </a>
      <a href="#" className="sidebar-toggler flex-shrink-0">
        <i className="fa fa-bars" />
      </a>
      
      <div className="navbar-nav align-items-center ms-auto">
       
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <img
              className="rounded-circle me-lg-2"
              src="/admin/img/user.jpg"
              alt=""
              style={{ width: 40, height: 40 }}
            />
            <span className="d-none d-lg-inline-flex">John Doe</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <a href="#" className="dropdown-item">
              My Profile
            </a>
            <a href="#" className="dropdown-item">
              Settings
            </a>
            <a href="#" className="dropdown-item">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
    {/* Navbar End */}
    </div>
    </div>
    </>
);