import { useParams } from 'react-router-dom';
import UserProfile from '../../features/user/users/components/UserProfile/UserProfile';
import { ProfileContainer } from './profile-styled';

const Profile = () => {
  const { id } = useParams();
  const userId = id ?? '';

  return (
    <ProfileContainer>
      <UserProfile userId={userId} />
    </ProfileContainer>
  );
};

export default Profile;
