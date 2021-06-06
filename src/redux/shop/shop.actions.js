import ShopActionTypes from './shop.types'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
})

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsFailure = errorMessage => ({
	type: ShopActionTypes.fetchCollectionsFailure,
	payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collections')
		dispatch(fetchCollectionsStart());

		collectionRef.get().then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
			dispatch(fetchCollectionsSuccess(collectionsMap))
		}).catch(error => dispatch(fetchCollectionsFailure(error)))
	}
}

