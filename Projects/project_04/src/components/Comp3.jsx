import styles from "./Comp3.module.css"

const Comp3 = ({name}) => {

   let arr = [1, 2, 3]
  

  return (
    <div>
      <h1>Button in comp three: {arr}</h1>
      <h1>This is props in component no 3 : {name}</h1>
      <button className={styles.btn}>BUTTON01</button>
    </div>
  )
}

export default Comp3
