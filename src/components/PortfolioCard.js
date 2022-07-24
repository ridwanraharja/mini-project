import { Link } from "react-router-dom";
function PortfolioCard(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden m-4">
      <Link to={`/products/${props.portfolio.id}`}>
        <div
          style={{
            backgroundImage: `url('${props.portfolio.images}')`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/portfolios/${props.portfolio.id}`}>
            {props.portfolio.name}
          </Link>
        </h3>
        <div className="mb-3">{props.portfolio.description}</div>
        <Link
          to={`/portfolios/${props.portfolio.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default PortfolioCard;
