import React from "react";

import styles from './Modal.module.css'

interface Props {
    children: React.ReactNode
}

const Modal = ({children}: Props) => {
    const closeModel = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal");
        modal!.classList.add("hide");
    };

    return (
        <div id="modal" className="hide">
            <div className={styles.fade} onClick={closeModel}></div>
            <div className={styles.modal}>
                <h2>Texto modal</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal