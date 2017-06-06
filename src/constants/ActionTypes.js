import keyMirror from 'keymirror'

const ActionsTypes = keyMirror({
    LOGIN_SUBMIT: null,
    LOGIN_SUCCESS: null,
    LOGIN_FAILED: null,
    LOGOUT: null,

    DASH_VIEW_MORE: null,

    CLICK_DRAWER_ICON: null,
    CLICK_DRAWER_ITEM: null,
    CLICK_DRAWER_MENU: null,
    CLICK_LOGOUT: null
});

export default ActionsTypes;