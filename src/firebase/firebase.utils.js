import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDlckOcGeBlNY3M8f3jza7gbi50Q9z0i5w",
	authDomain: "clothing-db-c9591.firebaseapp.com",
	projectId: "clothing-db-c9591",
	storageBucket: "clothing-db-c9591.appspot.com",
	messagingSenderId: "1035743192868",
	appId: "1:1035743192868:web:f7a32b2552010e383235b1"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapShot = await userRef.get()

	if(!snapShot.exists){
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}catch(error){
			console.log("Erro creating user", error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;