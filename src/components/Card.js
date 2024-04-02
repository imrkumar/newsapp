import { useEffect, useState } from "react";

const Card = () => {
  // let url =
  //   "https://newsapi.org/v2/everything?q=cricket&from=2024-03-02&sortBy=publishedAt&apiKey=0b6d9920db8d436ea57538343633cd7c";
  let url = "https://fakestoreapi.com/products";
  let [data, setData] = useState([]);
  function getNews(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // let { articles } = data;
        // setData(articles);
        setData(data);
      });
  }
  useEffect(() => {
    getNews(url);
  }, [url]);

  return (
    <div className="d-flex mt-5 justify-content-center flex-wrap">
      {data.map((item) => {
        return (
          <div className="card w-25 m-3 ">
            <div className="card-header d-flex justify-content-center">
              <img
                src={item.image}
                className="w-75  card-img-height"
                alt="img"
              />
            </div>
            <div className="card-body">{item.title}
          
            </div>
            {/* <div className="card-footer d-flex justify-content-between">
              <span><small className="text-muted">{item.publishedAt}</small></span>
              <span><a href={item.url} className="btn btn-danger">Read</a></span>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
