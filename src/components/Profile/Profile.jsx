import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  AvatarImg,
  AvatarName,
  AvatarTag,
  AvatarLocation,
  ProfileStats,
  StatsLabel,
  StatsQuantity,
} from './Profile.module';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <AvatarImg src={avatar} alt="User avatar" />
        <AvatarName>{username}</AvatarName>
        <AvatarTag>{'@' + tag}</AvatarTag>
        <AvatarLocation>{location}</AvatarLocation>
      </Description>

      <ProfileStats>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </li>
      </ProfileStats>
    </ProfileCard>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
