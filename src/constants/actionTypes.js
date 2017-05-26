import keyMirror from 'keymirror'

export const MainActions = keyMirror({
    CLICK_DRAWER_ICON: null,
    CLICK_DRAWER_ITEM: null,
    CLICK_DRAWER_MENU: null,
    CLICK_LOGOUT: null
});

export const DashBoardActions = keyMirror({
    VIEW_MORE: null
});

export const LoginActions = keyMirror({
    DO_LOGIN: null,
    RESET: null
});