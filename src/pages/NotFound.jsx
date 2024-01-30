import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const { state } = useLocation();
  return (
    <div className="container py-6">
      <img
        className="img-fluid  rounded"
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt=""
      />
      <p className="text-center fs-3 my-4">
        Üzgünüz, aradığınız sayfa bulunamadı.
      </p>
      <div className="d-flex justify-content-center">
        <Link className="btn btn-primary" to={"/"}>
          Anasayfa
        </Link>
      </div>
      {state && (
        <p className="fs-3 text-center my-4">
          Hata Kodunuz <span className="badge bg-danger mx-4">{state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
