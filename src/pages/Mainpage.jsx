import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1>Hoş Geldiniz</h1>
      <img
        className="img-fluid rounded"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnY4cnM4cHhuanFwdXg1OWE2bDgyYzhvcnQ4bWUxdzZwYTVmdGMzYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NqkqPY89cdg49qB78A/giphy.gif"
        alt=""
      />

      <p>
        <Link to={"/ürünler"}>Ürünler Sayfasında</Link> Yeni Çıkan Bütün
        Kitaplara Ulaşabilirsiniz.
      </p>
    </div>
  );
};

export default MainPage;
