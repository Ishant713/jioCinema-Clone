import styles from './carousel.module.css'
import ct from '../../assets/c8.png'
import cv from '../../assets/c9.png'

 const Carousel = () => {
  return (
    <>
        <section className={styles.carousel}>
          <div className={styles.bs}>
          <img className={styles.im2} src={cv}/>
            <img src="https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/m6-ban_vs_nz_champions_trophy_live_clean_ctv-1740325162803.jpg"/>
            <img className={styles.im2} src={ct}/>
          </div>

        </section>
    </>
  )
}
export default Carousel
