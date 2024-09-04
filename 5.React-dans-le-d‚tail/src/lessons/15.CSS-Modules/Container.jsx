import "./Container.css"
import styles from "./Container.module.css"
export default function Container() {
  console.log(styles);

  return (
    <div>
      {/* <h1 className="title">CSS Modules</h1> */}
      <h1 className={styles.title}>CSS Modules</h1>
    </div>
  )
}
