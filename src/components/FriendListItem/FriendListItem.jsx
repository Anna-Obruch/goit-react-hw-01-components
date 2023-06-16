import PropTypes from 'prop-types';
import {FriendItem, FriendStatus, FriendImg, FriendName} from './FriendListItem.module'

export const FriendListItem = ({avatar, name, isOnline}) => {
return (<FriendItem>
  <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
  <FriendImg src={avatar} alt="User avatar" width="48" />
  <FriendName>{name}</FriendName>
</FriendItem>
)}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}