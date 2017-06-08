import HomeIcon from 'material-ui-icons/Home';
import GiftIcon from 'material-ui-icons/CardGiftcard';
import InvitationIcon from 'material-ui-icons/InsertInvitation';
import SettingsIcon from 'material-ui-icons/Settings';
import FeedbackIcon from 'material-ui-icons/Feedback';

import '../../../assets/css/layouts/menu.scss';

export default [
    {
        title: '首页',
        path: '/dashboard',
        icon: HomeIcon
    },
    {
        title: '套餐',
        path: '/plan',
        icon: GiftIcon
    },
    {
        title: '邀请',
        path: '/invite',
        icon: InvitationIcon
    },
    {
        title: '设置',
        path: '/settings',
        icon: SettingsIcon
    },
    {
        title: '反馈',
        path: '/feedback',
        icon: FeedbackIcon
    }
];