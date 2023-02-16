import React from "react";

export default React.createContext({
    user: {},
    token: "",
    api: {},
    favorites: [],
    basket: [],




    setUser: () => {},
    setToken: () => {},
    setApi: () => {},
    modalActive: false,
    setModalActive: () => {},
    goods: [],
    setGoods: () => {},
    visibleGoods: [],
    setVisibleGoods: () => {},
    setFavorites: () => {},
    setBasket: () => {}
});