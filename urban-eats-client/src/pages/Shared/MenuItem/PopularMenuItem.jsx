import { useNavigate } from "react-router-dom";

const PopularMenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  const navigate = useNavigate();
  const handleMoreClick=()=>{
    navigate('/menu')
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-full">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[260px]"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="italic">{recipe}</p>
        <p className="font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleMoreClick}>More</button>
        </div>
      </div>
    </div>
  );
};

export default PopularMenuItem;
