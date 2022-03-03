import { all } from "redux-saga/effects";
import registeredUserSaga from '../redux/users/sagas';
import unregisteredUserSaga from '../redux/unregistereduser/sagas';
import projectMembershipsSaga from '../redux/projectmembership/sagas';

export default function* rootSaga() {
    yield all([
        registeredUserSaga(),
        unregisteredUserSaga(),
        projectMembershipsSaga()
    ]);
};