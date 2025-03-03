const CardItemComponent = ({ foodX }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={foodX.strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {foodX.strMeal}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">{foodX.strCategory}</div>
          <div className="badge badge-outline">{foodX.strArea}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItemComponent;
