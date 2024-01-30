import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    searchParams.set("sırala", e.target.value);
    setSearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set("aramaTerimi", e.target[0].value);

    setSearchParams(searchParams);
  };
  return (
    <div>
      <div className="mt-4 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3 align-items-center">
          <label>Sırala</label>
          <select onChange={handleChange} className="form-select">
            <option>a-z</option>
            <option>z-a</option>
          </select>
        </div>

        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            placeholder="Kitap ismi giriniz"
            className="form-control"
            type="text"
          />

          <button className="btn btn-warning">Ara</button>
        </form>
      </div>
    </div>
  );
};

export default FilterArea;
