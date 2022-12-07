import { React, useState } from 'react'

export const Register = (props) => {
    const { email, setEmail } = useState('');
    const { mdp, setMdp } = useState('');
    const { nom, setNom } = useState('');

    const handleSubmit = (e) => {
        e.preventDefaultt();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >Nom</label>
                <input value={nom} onChange={(e) => setNom(e.target.value)} type="texte" placeholder="votre nom" id="nom" mane="nom" />
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="votre email" id="email" mane="email" />
                <label for="mdp">Mot de passe</label>
                <input value={mdp} onChange={(e) => setMdp(e.target.value)} type="password" placeholder="votre mot de passe" id="mdp" mane="mdp" />
                <button type="submit">Connexion</button>
            </form>
            <button onClick={() => props.onFormSwitch('Login')}> Enregistrer </button>
        </>
    )
}


export default Register