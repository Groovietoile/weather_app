const Favorites = (props) => {
    const mockFavorites = ["paris, fr", "berlin, de", "new york, us"];
    return (
        <>
            <h2>Favorites</h2>
            <div>{mockFavorites.map((favoriteCity) => <p key={favoriteCity}>{favoriteCity}</p>)}</div>
        </>
    );
}
export default Favorites;