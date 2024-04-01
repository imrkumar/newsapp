const Header = () => {
  return (
    <>
      <header className="bg-success text-white p-3 text-center fs-5 font-weight-bold d-flex justify-content-between">
        <span> News App</span>
        <span className="w-25">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
          />
        </span>
      </header>
    </>
  );
};
export default Header;
