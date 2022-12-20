import React, {Component, useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import styles from './Loader.module.scss';

const SpinnerLoader = ({show, size, noBg}: {
    show: boolean,
    size: number,
    noBg?: boolean
}) => {

    return (
        <div className={`${styles.loaderWrapper} ${show ? 'flex' : 'hidden'} ${noBg?'':styles.loaderWrapperBg}`}>
            <div>
                <ClipLoader loading={show || false} size={size || 75} color='#36F1CD'/>
            </div>
        </div>
    )
};


export default SpinnerLoader;
