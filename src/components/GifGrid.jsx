import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className=" mt-3 custom-gif-grid">
        <h3>{category}</h3>
        {isLoading && <h2>Cargando...</h2>}

        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4 mb-4">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      </div>
    </>
  );
};
