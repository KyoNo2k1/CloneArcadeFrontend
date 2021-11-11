import React from 'react'
// import axios from 'axios'
// import React, { useEffect , useState , useRef }from 'react'
import "./GameType.css";
import CategoriesCell from '../CategoriesCell/CategoriesCell';
import InfiniteCarousel from 'react-leaf-carousel';
/* <!--Game Picture --> */

/* <!--Game Link --> */

function GameCategories({listCategory}){
 
    const allCategories = listCategory.map(categories => {
        return (
            <CategoriesCell categories={categories}/>
        );
    })
    


    return (
        <div>
            <h3>Game Type</h3>
                <div className = "CategoryCell">
                    {allCategories}
                </div>

        </div>
    );
};

export default GameCategories;