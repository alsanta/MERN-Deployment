import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowPets = (props) => {
    const [allPets, setAllPets] = useState([]);
    //     const history = useHistory();
    //     const {ParamNameFromRoute, otherParam, anotherParam} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                // console.log(res);
                setAllPets(res.data.results)
            })
            .catch(err => {
                console.log("error", err);
            })
    }, [])

    return (
        <div className="main">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPets.sort((a, b) => {
                            var typeA = a.type.toLowerCase(), typeB = b.type.toLowerCase();
                            if (typeA < typeB)
                                return -1;
                            if (typeA > typeB)
                                return 1;
                            return 0;
                        }).map((pet, idx) => {
                            return <tr key={idx}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><Link to={`/pet/${pet._id}`}>Details</Link> | <Link to={`/edit/${pet._id}`}>Edit</Link></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ShowPets;