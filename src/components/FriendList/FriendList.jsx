import PropTypes from 'prop-types';
import {FriendListItem} from 'components/FriendListItem/FriendListItem'
import {FriendListCard} from './FriendList.module'


export const FriendList = ({friends}) =>{
return(
    <FriendListCard>{
    friends.map((friend) => (
<FriendListItem
   key={friend.id}
   avatar={friend.avatar}
    name={friend.name}
    isOnline={friend.isOnline}/>
    ))}
</FriendListCard>)
    
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired).isRequired
    
    }