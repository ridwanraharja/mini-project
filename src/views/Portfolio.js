import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  const url = `https://62dcd8d84438813a261a4539.mockapi.io/api/v1/products/`;
  const [portfolios, setPortfolios] = useState({
    loading: false,
    data: null,
    eror: false,
  });

  let contents;

  useEffect(() => {
    setPortfolios({
      loading: true,
      data: null,
      eror: false,
    });

    axios
      .get(url)
      .then((response) => {
        setPortfolios({
          loading: false,
          data: response.data,
          eror: false,
        });
      })
      .catch(() => {
        setPortfolios({
          loading: false,
          data: null,
          eror: true,
        });
      });
  }, [url]);

  if (portfolios.eror) {
    contents = <p>404 Eror</p>;
  }

  if (portfolios.loading) {
    contents = <Loader />;
  }

  if (portfolios.data) {
    contents = portfolios.data.map((portfolio, key) => (
      <PortfolioCard portfolio={portfolio} />
    ));
  }
  return (
    <div>
      <h1 className="text-center font-bold p-4 m-2">My Portfolio</h1>
      {contents}
    </div>
  );
}

export default Portfolio;
