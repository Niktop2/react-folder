import styles from "./Item.module.css"

const Item = ({items, bought, handleByButton}) => {
  return (
    <li className={`${styles['kg-item']}  list-group-item ${bought && "active"}`} >
       <span className={styles['kg-span']}>{items}</span>
       <button className={styles.button}
       onClick={handleByButton}
       >Buy</button>
    </li>
  )
}

export default Item; 