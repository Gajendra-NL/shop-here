import { firestore, convertCollectionsSnapshotToMap } from '../../firebase//firebase.utils';
import ShopActionTypes from './shop.types';

// thunks are action creators that returns a function gets dispatch (similar to mapDispatchToProps)
// when thunk is enabled, anytime one attempt to disapatch a function instead of abject, 
// thunk will call that function with dispatch as its first argument

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart());

        collectionRef.get()
        .then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(err => {
            dispatch(fetchCollectionsFailure(err.message));
        })
    }
}