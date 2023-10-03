import { Link } from "react-router-dom";

const Newscard = ({ aNews }) => {
  const { title,thumbnail_url,image_url, details, _id } = aNews;
  return (
    <div className="card w-full bg-base-100 shadow-xl my-3">
      <figure><img src={image_url} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {
            details.length > 200 ? 
            <p> {details.slice(0,200)} 
            <Link to={`/news/${_id}`} className="text-pink-500 font-semibold"> Read More..</Link>
             </p>
            :
            <p> {details} </p>
          }
        </p>
       
      </div>
    </div>
  );
};

export default Newscard;