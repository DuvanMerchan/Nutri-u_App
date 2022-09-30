import React from 'react';

import style from './Spinner.module.css';

export default function Spinner(){
    return(
        <div className={style.spinnerContainer}>
            <div className={style.loadingSpinner}/>
        </div>
    );
}