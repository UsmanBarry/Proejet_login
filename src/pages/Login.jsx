import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export const Login = () => {
    const [matricule, setMatricule] = useState('');
    const [mdp, setMdp] = useState('');



    const onConnect = () => {
        const url = "https://server.joeleprof.com/auth/login";
        const body = {
            "matricule": matricule,
            "password": mdp,
        }

        // version.then
        axios.post(url, body)
            .then(data => {
                console.log(data)
            });

    }



    return (

        <div className='container'>


            <h2>Page de connexion</h2>
            <div className="form-group">
                <input value={matricule}
                    placeholder="Matricule"
                    type="text"
                    className="mail" onChange={(e) => setMatricule(e.target.value)} required /> <br />
                <input value={mdp}
                    placeholder="Mot de passe"
                    type="password"
                    className="mail" onChange={(e) => setMdp(e.target.value)} required />

            </div>

            <input type="submit" onClick={onConnect} className='connexion' value="Connexion" />
            <p>
                <br />
            </p>
            <div>
                <Link to={'/Register'}> Nouvelle cliente ? m'inscrire</Link>
            </div>




        </div>
    )
}

export default Login