import React from "react";
import styles from './Pagination.module.css';

const Pagination = (props) => {
    let pages = [];

    for( let i=1; i<= Math.ceil(props.productCount/6); i++) {
        pages.push(i);
    }

    const setPageHandler = (page) => {
        props.setPage(page);
    }

    

    return(
        <div className={styles.pagination}>
            {pages.map((page, index) => {
                return <button key={index} onClick={() => setPageHandler(page)}>{page}</button>
            })}
        </div>
    )

}

export default Pagination;