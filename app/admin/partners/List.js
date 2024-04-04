import { pathImage } from "@/app/utils";

const ListPartners = ({ items }) => {
    return (
      <>
        {items.map((item, index) => (
          <div className="testimonial-item text-center" key={index}>
          <img
            className="img-fluid rounded-circle mx-auto mb-4"
            src={pathImage+item.photo}
            style={{ width: 100, height: 100 }}
          />
          <h5 className="mb-1">{item.name}</h5>
          <p>{item.description}</p>
          <p className="mb-0">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
            stet amet eirmod eos labore diam
          </p>
        </div>
        ))}
      </>
    );
  };
  
  export default ListPartners;