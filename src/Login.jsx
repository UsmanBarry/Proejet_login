import { React, useState } from 'react'

export const Login = () => {
    const { email, setEmail } = useState('');
    const { mdp, setMdp } = useState('');

    const handleSubmit = (e) => {
        e.preventDefaultt();
        console.log(email);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="email">Mail</label> <br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="votre email" id="email" mane="email" />
                <br /><label for="mdp">Pass Word</label><br />
                <br /><input value={mdp} onChange={(e) => setMdp(e.target.value)} type="password" placeholder="votre mot de passe" id="mdp" mane="mdp" />
                <br /><button type="submit">Connexion</button><br /><br />
            </form>
            <button onClick={() => this.props.onFormSwitch('Register')}>Veuillez vous Enregistrer ici</button>
        </>
    )
}


export default Login