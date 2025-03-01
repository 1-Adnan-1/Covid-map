import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "../../components/loader/content-loader";
import Error from "../../components/error";
import Card from "./card";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";
import millify from "millify";

const Content = () => {
  const { country } = useParams();
  const dispatch = useDispatch();

  const { isLoading, error, data } = useSelector((store) => store);

  const arr = Object.entries(data || {}).filter(([key]) => key !== "flag");

  const refetch = () => dispatch(getDetails(country));

  return (
    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} refetch={refetch} />
      ) : (
        arr.map((item, key) => {
          const formattedItem = Array.isArray(item)
            ? item.map((value) =>
                typeof value === "number" ? millify(value) : value
              )
            : item;

          return <Card key={key} item={formattedItem} />;
        })
      )}
    </div>
  );
};

export default Content;
