import keyMirror from 'keymirror'

const ActionsTypes = keyMirror({
    LEFT_ITEM_CLICKED: null,

    LOGIN_SUBMIT: null,
    LOGIN_SUCCESS: null,
    LOGIN_FAILED: null,
    LOGOUT: null,

    DASH_VIEW_MORE: null,

    PLAN_LOAD: null,

    CLICK_DRAWER_ICON: null,
    CLICK_DRAWER_ITEM: null,
    CLICK_DRAWER_MENU: null,
    CLICK_LOGOUT: null
});

export default ActionsTypes;