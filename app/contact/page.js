import Menu from "../components/Menu"

export default function Contact(){
    return (
        <>
  <meta charSet="utf-8" />
  <title>Foody - Organic Food Website Template</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="" name="keywords" />
  <meta content="" name="description" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Lora:wght@600;700&display=swap"
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
  <link href="lib/animate/animate.min.css" rel="stylesheet" />
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  {/* Customized Bootstrap Stylesheet */}
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Spinner Start */}
  <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div className="spinner-border text-primary" role="status" />
  </div>
  {/* Spinner End */}
  {/* Navbar Start */}
  <div
    className="container-fluid fixed-top px-0 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
      <div className="col-lg-6 px-5 text-start">
        <small>
          <i className="fa fa-map-marker-alt me-2" />
          123 Street, New York, USA
        </small>
        <small className="ms-4">
          <i className="fa fa-envelope me-2" />
          info@example.com
        </small>
      </div>
      <div className="col-lg-6 px-5 text-end">
        <small>Follow us:</small>
        <a className="text-body ms-3" href="">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="text-body ms-3" href="">
          <i className="fab fa-twitter" />
        </a>
        <a className="text-body ms-3" href="">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="text-body ms-3" href="">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
    <nav
      className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="fw-bold text-primary m-0">
          F<span className="text-secondary">oo</span>dy
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Menu/>
    </nav>
  </div>
  {/* Navbar End */}
  {/* Page Header Start */}
  <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
    <div className="container">
      <h1 className="display-3 mb-3 animated slideInDown">Contact Us</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a className="text-body" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className="text-body" href="#">
              Pages
            </a>
          </li>
          <li className="breadcrumb-item text-dark active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="container-xxl py-6">
    <div className="container">
      <div
        className="section-header text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <h1 className="display-5 mb-3">Contact Us</h1>
        <p>
          Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
          justo sed rebum vero dolor duo.
        </p>
      </div>
      <div className="row g-5 justify-content-center">
        <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
            <h5 className="text-white">Call Us</h5>
            <p className="mb-5">
              <i className="fa fa-phone-alt me-3" />
              +012 345 67890
            </p>
            <h5 className="text-white">Email Us</h5>
            <p className="mb-5">
              <i className="fa fa-envelope me-3" />
              info@example.com
            </p>
            <h5 className="text-white">Office Address</h5>
            <p className="mb-5">
              <i className="fa fa-map-marker-alt me-3" />
              123 Street, New York, USA
            </p>
            <h5 className="text-white">Follow Us</h5>
            <div className="d-flex pt-2">
              <a
                className="btn btn-square btn-outline-light rounded-circle me-1"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-1"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-1"
                href=""
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-0"
                href=""
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          <p className="mb-4">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax &amp; PHP in a few minutes. Just copy and
            paste the files, add a little code and you're done.{" "}
            <a href="https://htmlcodex.com/contact-form">Download Now</a>.
          </p>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 200 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary rounded-pill py-3 px-5"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Google Map Start */}
  <div
    className="container-xxl px-0 wow fadeIn"
    data-wow-delay="0.1s"
    style={{ marginBottom: "-6px" }}
  >
    <iframe
      className="w-100"
      style={{ height: 450 }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
      frameBorder={0}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex={0}
    />
  </div>
  {/* Google Map End */}
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark footer pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h1 className="fw-bold text-primary mb-4">
            F<span className="text-secondary">oo</span>dy
          </h1>
          <p>
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit, sed stet lorem sit clita
          </p>
          <div className="d-flex pt-2">
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href=""
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-0"
              href=""
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Address</h4>
          <p>
            <i className="fa fa-map-marker-alt me-3" />
            123 Street, New York, USA
          </p>
          <p>
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p>
            <i className="fa fa-envelope me-3" />
            info@example.com
          </p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Quick Links</h4>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a href="#">Your Site Name</a>, All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>

  <script src="/admin/jquery/jquery-3.4.1.min.js"></script>
    <script src="/admin/jquery/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <script src="js/main.js"></script>
</>

    )
}