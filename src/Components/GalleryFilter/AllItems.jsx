const AllItems = (props) => {
  return (
    <div
      className="rounded-lg border border-gray-200 bg-white shadow"
      id={props.category}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <a href="#" className="relative">
            <img
              className="aspect-video rounded-t-lg object-cover"
              src={props.thumbnail}
            />
            <span className="absolute bottom-0 m-5 inline-block rounded-md bg-red-400 p-1 px-2 text-xs uppercase text-white">
              {props.category.replace(/-/g, " ")}
            </span>
          </a>

          <div className="static p-5">
            <h2 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
              {props.title}
            </h2>
            <p className="mb-3"> By {props.brand.replace(/_/g, " ")}</p>
            <p className="mb-3 font-normal text-gray-700">
              {props.description}
            </p>
            <span className="rounded bg-blue-100 p-1 text-xs font-semibold text-blue-800">
              {props.rating}
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-950">
              ${props.price}
            </span>
            <button
              className="rounded-md bg-blue-950 px-3 py-2 text-sm uppercase text-white"
              disabled
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
