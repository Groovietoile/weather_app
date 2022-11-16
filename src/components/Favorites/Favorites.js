import { useState } from "react";

const Favorites = (props) => {
    const [favorites, setFavorites] = useState(props.favorites);
    const deleteFavorite = (index) => {
        setFavorites(favorites.filter((_, i) => index !== i));
    };
    return (
        <>
            <h2>Favorites</h2>
            <div>{favorites?.map((favorite, index) => {
                return (
                    <div key={index}>
                        <p>{favorite.city}</p>
                        <button onClick={() => deleteFavorite(index)}>Delete</button>
                    </div>
                );
            })}</div>
            <button onClick={() => {
                // TODO
            }}>Save</button>
        </>
    );
}
export default Favorites;