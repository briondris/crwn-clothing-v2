import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef); 
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign In With Google Popup </button>
        </div>
    )
}

export default SignIn