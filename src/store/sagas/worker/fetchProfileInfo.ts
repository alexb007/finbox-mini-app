import {put} from 'redux-saga/effects';
import bridge from '@vkontakte/vk-bridge';
import {ISetUserAction} from "../../actions/user/types";
import {SET_USER} from "../../constants/user";
import {UPDATE_FORM_VALUES} from "../../constants/selection";
import {IUpdateFormValuesAction} from "../../actions/selection/types";

const phoneRegex = /[\s\(\)\-]+/ig

function cleanPhone(phone: string) {
    console.log(phone);
    if (phone != undefined && phone !== null) {
        phone = phone.replaceAll(phoneRegex, '');
        if (!phone.startsWith('+')) {
            phone = `+${phone}`;
        }
    }
    return phone;
}

export function* fetchProfileInfoWorker() {
    const data = yield bridge.send('VKWebAppGetUserInfo').catch(() => {

    });

    yield put<ISetUserAction>({
        type: SET_USER,
        payload: {
            user: {
                id: data.id,
                first_name: data.first_name,
                last_name: data.last_name,
            },
        }
    });

    yield put<IUpdateFormValuesAction>({
        type: UPDATE_FORM_VALUES,
        payload: {
            fullname: `${data.first_name ?? ''}${' ' + data.last_name ?? ''}`,
        }
    });

    // yield put<ISetUserAction>({
    //     type: SET_USER,
    //     payload: {
    //         user: {
    //             id: 1,
    //             first_name: 'Bakhrom',
    //             last_name: 'as',
    //         },
    //     }
    // });
    //
    // yield put<IUpdateFormValuesAction>({
    //     type: UPDATE_FORM_VALUES,
    //     payload: {
    //         fullname: `${'Bakhrom' ?? ''}${' Rakhmonov' ?? ''}`,
    //     }
    // });
}

export function* fetchContactsWorker() {

    let contacts = yield bridge.send("VKWebAppGetPersonalCard", {"type": ["phone", "email"]}).catch((error) => {
        console.log(error);
    });

    
    if (contacts == null) {
        const email = yield bridge.send("VKWebAppGetEmail").catch((error) => {
            console.log(error);
        });
        const phone = yield bridge.send("VKWebAppGetPhoneNumber").catch((error) => {
            console.log(error);
        });
        contacts = {email: email?.email, phone: phone?.phone};
    }
    yield put<ISetUserAction>({
        type: SET_USER,
        payload: {
            user: {
                phone: contacts?.phone,
                email: contacts?.email,
            },
        }
    });
    yield put<IUpdateFormValuesAction>({
        type: UPDATE_FORM_VALUES,
        payload: {
            phone: contacts?.phone,
            email: contacts?.email,
        }
    });

    // yield put<ISetUserAction>({
    //     type: SET_USER,
    //     payload: {
    //         user: {
    //             phone: '+7123123123',
    //             email: 'dummy@url.com',
    //         },
    //     }
    // });
    //
    // yield put<IUpdateFormValuesAction>({
    //     type: UPDATE_FORM_VALUES,
    //     payload: {
    //         phone: '+7123123123',
    //         email: 'dummy@url.com',
    //     }
    // });
}

export function* fetchEmailWorker() {

    let contacts = yield bridge.send("VKWebAppGetPersonalCard", {"type": ["email"]}).catch((error) => {
        console.log(error);
    });

    
    if (contacts == null) {
        const email = yield bridge.send("VKWebAppGetEmail").catch((error) => {
            console.log(error);
        });
        contacts = {email: email?.email}
    }
    yield put<ISetUserAction>({
        type: SET_USER,
        payload: {
            user: {
                email: contacts?.email,
            },
        }
    });
    yield put<IUpdateFormValuesAction>({
        type: UPDATE_FORM_VALUES,
        payload: {
            email: contacts?.email,
        }
    });

    // yield put<ISetUserAction>({
    //     type: SET_USER,
    //     payload: {
    //         user: {
    //             phone: '+7123123123',
    //             email: 'dummy@url.com',
    //         },
    //     }
    // });
    //
    // yield put<IUpdateFormValuesAction>({
    //     type: UPDATE_FORM_VALUES,
    //     payload: {
    //         phone: '+7123123123',
    //         email: 'dummy@url.com',
    //     }
    // });
}

export function* fetchPhoneWorker() {

    let contacts = yield bridge.send("VKWebAppGetPersonalCard", {"type": ["phone"]}).catch((error) => {
        console.log(error);
    });

    
    if (contacts == null) {
        const phone = yield bridge.send("VKWebAppGetPhoneNumber").catch((error) => {
            console.log(error);
        });
        contacts = {phone: phone?.phone_number};
    }
    yield put<ISetUserAction>({
        type: SET_USER,
        payload: {
            user: {
                phone: cleanPhone(contacts?.phone),
            },
        }
    });
    yield put<IUpdateFormValuesAction>({
        type: UPDATE_FORM_VALUES,
        payload: {
            phone: cleanPhone(contacts?.phone),
        }
    });

    // yield put<ISetUserAction>({
    //     type: SET_USER,
    //     payload: {
    //         user: {
    //             phone: '+7123123123',
    //             email: 'dummy@url.com',
    //         },
    //     }
    // });
    //
    // yield put<IUpdateFormValuesAction>({
    //     type: UPDATE_FORM_VALUES,
    //     payload: {
    //         phone: '+7123123123',
    //         email: 'dummy@url.com',
    //     }
    // });
}


