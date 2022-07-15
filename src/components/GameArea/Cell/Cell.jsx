import React from "react"
import styles from "./Cell.module.css"

const Cell = (props) => {
   return (<div className={styles.cellContainer}>
      <div className={`${styles.wrapper} ${props.activeCathegory ? styles.active : ""} ${props.showingTargetCell && props.itIsTargetCell ? styles.targetCell : ""}`}></div>

      {props.showingCheckers
         ? <div className={`${styles.checker} ${props.role === "head" ? styles.head : styles.tail}`}>
            <p>{props.role === "head" ? "H" : "T"}</p>
         </div>
         : <p className={styles.cellCode}> {props.number}</p>}
   </div>)
}


export default Cell
