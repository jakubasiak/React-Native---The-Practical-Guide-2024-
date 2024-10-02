import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => { },
  removeFavorite: (id) => { },
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds(prev => [...prev, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds(prev => prev.filter(mealId => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
