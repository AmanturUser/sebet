'use client'
import { useState  } from 'react';
import { ip } from "@/app/utils"; 
import Script from "next/script"



export default function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState(null)

  const [isLoading, setLoading] = useState(true)
  const signInPost = async (event) => {
    console.log('print');
    event.preventDefault();
    const submitData = { username,password }
    try {
      setLoading(true)
      const result = await fetch(ip + "/api/auth/login", {
        method: "POST",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(submitData),
      })
      if(result.ok){
        result.json()
      .then((data) => {
        console.log("Yeai!")
        setData(data)
        console.log(data)
        const token=data.jwt
        localStorage.setItem('jsonWebToken',('Bearer '+token))
        window.location.assign('/admin/dashboard')
      });
      }
    } catch (error) {
      console.log(error)
    }
    setUsername('')
    setPassword('')
  }
  return (
    <>
      <meta charSet="utf-8" />
      <title>Sebet</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="" name="keywords" />
      <meta content="" name="description" />
      {/* Favicon */}
      <link href="img/favicon.ico" rel="icon" />
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
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      {/* Template Stylesheet */}
      <link href="/admin/css/style.css" rel="stylesheet" />
      <div className="container-fluid position-relative bg-white d-flex p-0">
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        {/* Spinner End */}
        {/* Sign In Start */}
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="" className="">
                    <h3 className="text-primary">
                      <i className="fa fa-hashtag me-2" />
                      Sebet
                    </h3>
                  </a>
                  <h3>Sign In</h3>
                </div>
                <form onSubmit={signInPost}><div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Username"
                    value={username}
                  onChange={e => setUsername(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                  onChange={e => setPassword(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <a href="">Forgot Password</a>
                  </div>
                  <button type='submit' className="btn btn-primary py-3 w-100 mb-4">
                    Sign In
                  </button></form>
                <p className="text-center mb-0">
                  Don't have an Account? <a href="">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Sign In End */}
      </div>
      <Script src="/admin/jquery/jquery-3.4.1.min.js"></Script>
      <Script src="/admin/jquery/bootstrap.bundle.min.js"></Script>
      <Script src="/admin/lib/chart/chart.min.js"></Script>
      <Script src="/admin/lib/easing/easing.min.js"></Script>
      <Script src="/admin/lib/waypoints/waypoints.min.js"></Script>
      <Script src="/admin/lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="/admin/lib/tempusdominus/js/moment.min.js"></Script>
      <Script src="/admin/lib/tempusdominus/js/moment-timezone.min.js"></Script>
      <Script src="/admin/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></Script>

      <Script src="/admin/js/mainForCat.js"></Script>
    </>

  )
}