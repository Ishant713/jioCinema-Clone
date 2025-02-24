import styles from './tags.module.css'
import {useState} from 'react'
const Tags = () => {
    let[tags,setTags]=useState([
        "For You",
        "Attack",
        "Romantic Comedy",
        "Thriller",
        "Sci-Fi",
        "Drama",
        "Fantasy",
        "Documentary",
        "Crime",
        "Adventure",
        "Mystery",
        "Animated",
        "historical",
        "Tata ipl 2025",
        "web series"
    ])
  return (
    <>
        <div className={styles.tags}>
            {
                tags.map((tag)=>{
                    return <p className={styles.tag}>{tag}</p>
                })
            }
           
        </div>
    </>
  )
}

export default Tags