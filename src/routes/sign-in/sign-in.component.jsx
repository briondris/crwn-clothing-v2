import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    // useEffect(async() => {
    //     const {response} = await getRedirectResult(auth);

    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //         console.log(userDocRef); 
    //     }
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef); 
    }
    const logGoogleRedirectUser = async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign In With Google Popup </button>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default SignIn