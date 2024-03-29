import axios from "axios";
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './HomePage.css';
import Banner from "../components/Banner";

const apiURL = 'https://ironrest.cyclic.app/bg_finder' 

const HomePage = () => {

    const [groups, setGroups] = useState([])
    const [groupSearch, setGroupSearch] = useState(groups)
    const [refresh] = useState(false)
    
    useEffect(() => { 
        axios.get(apiURL).then(response => {
        setGroups(response.data)
        setGroupSearch(response.data)
        }).catch(err => console.log(err))
    }, [refresh])


    return ( 

        
        
        
        <div className="HomePage">

            <Banner setGroupSearch = {setGroupSearch} groups = {groups}/>     

            
            <div className="container text-center">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4 mt-4">
                
                    
                    {groupSearch.map(group => {
                            return (

                                <div className="col">
                                    <div className="card text-bg-light">
                                        
                                        <img src={group.image} className="card-img-top" alt="imagem do grupo" style={{maxHeight: '10rem', objectFit: 'cover'}}/>

                                        <div className="card-body">
                                            <h5 className="card-title">{group.groupName}</h5>
                                            <p className="card-text">{group.gameName}</p>
                                            <Link className="btn btn-secondary" to= {`/group/${group._id}`}>Ver mais</Link>
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }


                </div>
                   
                
            </div>
    

        </div>
        
     );
}
 
export default HomePage;