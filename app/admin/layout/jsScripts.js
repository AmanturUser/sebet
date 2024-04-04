import Script from "next/script"
const Scripts = ({ items }) => {
    return (
      <>
        <Script src="/admin/jquery/jquery-3.4.1.min.js"></Script>
        <Script src="/admin/jquery/bootstrap.bundle.min.js"></Script>
        <Script src="/admin/lib/easing/easing.min.js"></Script>
        <Script src="/admin/lib/waypoints/waypoints.min.js"></Script>
        <Script src="/admin/lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script src="/admin/lib/tempusdominus/js/moment.min.js"></Script>
        <Script src="/admin/lib/tempusdominus/js/moment-timezone.min.js"></Script>
        <Script src="/admin/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></Script>
        <Script src="/admin/js/mainForCat.js"></Script>
      </>
    );
  };
  
  export default Scripts;