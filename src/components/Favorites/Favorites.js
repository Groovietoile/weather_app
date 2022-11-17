import { useState } from "react";

const Favorites = (props) => {
    const [favorites, setFavorites] = useState(props.favorites);
    const deleteFavorite = (index) => {
        setFavorites(favorites.filter((_, i) => index !== i));
    };
    return (
        <>
            <h2>Favorites</h2>
            <div>
                {favorites?.map((favorite, index) => {
                    return (
                        <div key={index}>
                            <p>{favorite.city}</p>
                            <button onClick={() => deleteFavorite(index)}>Delete</button>
                        </div>
                    );
                })}
            </div>

            <button onClick={() => {
                fetch(`http://localhost:8000/users/${props.userId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({favorites})
                }).then(res => res.json())
                    .then(res => {
                       alert("saved successfully !");
                       props.setUserFavorites(favorites);
                    });
            }}>Save</button>

            <button onClick={() => {
                setFavorites(props.favorites);
            }}>Discard changes</button>
        </>
    );
}
export default Favorites;