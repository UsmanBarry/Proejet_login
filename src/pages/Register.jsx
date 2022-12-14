import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const Register = () => {
    const [matricule, setMatricule] = useState('');
    const [nom, setNom] = useState('');
    const [mdp, setMdp] = useState('');
    const [cmdp, setCmdp] = useState('');


    const navigate = useNavigate();
    const onBack = () => {
        navigate('/')
    }
    const onConnect = () => {
        const url = "https://server.joeleprof.com/auth/register";
        const body = {
            "matricule": matricule,
            "fullName": nom,
            "password": mdp,


        }

        // version.then
        axios.post(url, body)
            .then(data => {
                console.log(data)
            });

    }





    return (
        <div>



            <h2>Page d'inscription</h2>
            <div className='container'>
                <input value={matricule} type="texte" placeholder="Matricule" className="reg" onChange={(e) => setMatricule(e.target.value)} required />
                <input value={nom} type="texte" placeholder="Votre nom complet" className="reg" onChange={(e) => setNom(e.target.value)} required />
                <input value={mdp} type="password" placeholder="Mot de passe" className="reg" onChange={(e) => setMdp(e.target.value)} required />
                <input value={cmdp} type="password" placeholder="Confirmation du mot de passe" onChange={(e) => setCmdp(e.target.value)} className="reg" required />
                <input type="submit" className='connexion' onClick={onConnect}
                    value="Enregister" />
                <p onClick={onBack}>Déja client ? se Connecter</p>

            </div>






        </div>
    )
}


export default Register
