import React from "react";
import { FavoriteList } from "../components/FavoriteList.jsx/FavoriteList";


export const FavoritePage = () => {

    return (
        <div>
            <div className="container">
                <h3 className="heading-page">Favorite</h3>
                <FavoriteList />
            </div>
        </div>
    )
}