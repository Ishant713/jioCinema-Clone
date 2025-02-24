import styles from './Header.module.css'
import jclogo from '../../assets/jc_logo_v2.svg'
import ic from '../../assets/ic_search.svg'
import vc from '../../assets/voice-search.svg'
import ping from '../../assets/Pink.png'
import { useEffect, useState } from 'react'


const Header = (props) => {

  let navLinks = ["Home","Sports","Movies","TV Shows","More"]
  let [searchTitle,setSearchTitle] = useState("");
  let [filteredMovies,setFilteredMovies]=useState([])

  useEffect(()=>{

      if(searchTitle!=="")
      {
          let filterMovies = props.movies.filter((movie)=>{
              return movie.name.toUpperCase().indexOf(searchTitle.toUpperCase())==0
          })
  
          setFilteredMovies(filterMovies)
      }
      else
      {
          setFilteredMovies([])
      }

      


  },[searchTitle])


  return (
    <>
    <header className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>

          <img src={jclogo}/>
          <div className={styles.premium}>Go premium</div>
          </div>
          <ul className={styles.navlinks}>
            <li className={styles.navlink} >Home</li>
            <li className={styles.navlink} >Sports</li>
            <li className={styles.navlink} >Movies</li>
            <li className={styles.navlink} >Tv Shows</li>
            <li className={styles.navlink} >More  </li>
          </ul>

        </nav>
        <div className={styles.search}>
          <div className={styles.searchbox}>
            <div className={styles.headericon}>
              <img  src={ic}/>
            </div>
            <input type="text" 
            onChange={(event)=>{
                setSearchTitle(event.target.value)
            }}
            className={styles.searchinput}  placeholder='Movies Shows More'/>
            <div className={styles.headericon} >
               <img src={vc}/>
            </div>

          </div>
          <img className={styles.jiophoto} src={ping}/>

        </div>

    </header>
    {
            filteredMovies.length!==0?(
                <div className={styles.searchResults}>
                            
                        {
                            filteredMovies.map((movie)=>{
                                return <Show movie={movie}/>
                            })
                        }

                </div>
            ):null
        }
    </>
  )
}
export default Header