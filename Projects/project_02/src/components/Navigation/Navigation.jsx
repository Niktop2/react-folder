import styles from "./Navigation.module.css";

function Navigation() {
  
  return (
    <nav className={`${styles.navigation} container`}>
      <div>
        <img src="/images/logo.png" alt="do some coding logo"></img>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

    </nav>
  )

}
export default Navigation;