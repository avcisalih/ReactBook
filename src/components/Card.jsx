import { Link } from "react-router-dom";

Link;
const Card = ({ book }) => {
  return (
    <div className="card shadow rounded p-1">
      <img src={book.image} alt={book.title} />

      <div className="card-body">
        <h4>{book.title} </h4>
        <h5>{book.author}</h5>
      </div>

      <Link to={`/ürün/${book.id}`} className="btn btn-warning w-100">
        Detay Gör
      </Link>
    </div>
  );
};

export default Card;
