import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils.jsx";

import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    // Only use once to add data
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categorymap = await getCategoriesAndDocuments();
            //console.log(categorymap)
            setCategoriesMap(categorymap)
        }

        getCategoriesMap();
    }, [])

    const value = {categoriesMap};

    return (
        <CategoriesContext.Provider value={value} > {children} </CategoriesContext.Provider>
    )
}