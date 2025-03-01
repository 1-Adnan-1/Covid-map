const Card = ({ item }) => {
  return (
    <div className="p-6 mt-10 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform ">
      <p className="text-sm font-medium text-gray-600 capitalize mb-2">
        {item[0]}
      </p>
      <p className="text-2xl font-semibold text-gray-800">{item[1]}</p>
    </div>
  );
};

export default Card;
