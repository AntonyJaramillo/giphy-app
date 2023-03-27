export const GifItem = ({ title, url, id }) => {
  return (
    <>
      <div className="col">
        <div className="card h-100 custom-card rounded-4">
          <img src={url} className="card-img-top custom-card-img" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
