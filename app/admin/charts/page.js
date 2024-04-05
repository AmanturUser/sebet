import Script from "next/script"

export default async function Charts(){
  return (
    <>
    <meta charSet="utf-8" />
    <title>Sebet</title>
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
          <a href="/admin/dashboard" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">
              <i className="fa fa-hashtag me-2" />
              Sebet
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
            <a href="/admin/dashboard" className="nav-item nav-link">
              <i className="fa fa-tachometer-alt me-2" />
              Dashboard
            </a>
            <a
                    href="/admin/users"
                    className="nav-item nav-link"
                  >
                    Users
                  </a>
            <a href="/admin/certificates" className="nav-item nav-link">
              <i className="fa fa-th me-2" />
              Certificates
            </a>
            <a href="/admin/partners" className="nav-item nav-link">
                  <i className="fa fa-keyboard me-2" />
                  Partners
                </a>
            <a href="table.html" className="nav-item nav-link">
              <i className="fa fa-table me-2" />
              Tables
            </a>
            <a href="/admin/products" className="nav-item nav-link active">
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
        {/* Chart Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Single Line Chart</h6>
                <canvas id="line-chart" />
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Multiple Line Chart</h6>
                <canvas id="salse-revenue" />
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Single Bar Chart</h6>
                <canvas id="bar-chart" />
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Multiple Bar Chart</h6>
                <canvas id="worldwide-sales" />
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Pie Chart</h6>
                <canvas id="pie-chart" />
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Doughnut Chart</h6>
                <canvas id="doughnut-chart" />
              </div>
            </div>
          </div>
        </div>
        {/* Chart End */}
        {/* Footer Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="bg-light rounded-top p-4">
            <div className="row">
              <div className="col-12 col-sm-6 text-center text-sm-start">
                © <a href="#">Your Site Name</a>, All Right Reserved.
              </div>
              <div className="col-12 col-sm-6 text-center text-sm-end">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
      </div>
      {/* Content End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
    {/* JavaScript Libraries */}
    <Script src="/admin/jquery/jquery-3.4.1.min.js"></Script>
      <Script src="/admin/jquery/bootstrap.bundle.min.js"></Script>
      <Script src="/admin/lib/chart/chart.min.js"></Script>
      <Script src="/admin/lib/easing/easing.min.js"></Script>
      <Script src="/admin/lib/waypoints/waypoints.min.js"></Script>
      <Script src="/admin/lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="/admin/lib/tempusdominus/js/moment.min.js"></Script>
      <Script src="/admin/lib/tempusdominus/js/moment-timezone.min.js"></Script>
      <Script src="/admin/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></Script>
    {/* Template Javascript */}
    <Script src="/admin/js/mainForCharts.js"></Script>
  </>
  
  )
}