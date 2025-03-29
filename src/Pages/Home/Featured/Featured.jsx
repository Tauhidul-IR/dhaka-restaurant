import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-70 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2023</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            The platter features a variety of hors d'oeuvres or canapés,
            including seafood items like shrimp, garnished with fresh herbs.
            Other canapés have savory toppings on a base of bread or pastry,
            offering a mix of textures and flavors. The presentation is elegant,
            suitable for catered events, allowing guests to enjoy small bites in
            a social setting.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
