import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import UserProfile from '../../features/user/users/components/UserProfile/UserProfile';
import { getOneUser } from '../../features/user/users/users-slice';
import { ProfileContainer } from './profile-styled';

const Profile = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const userId = id ?? '';

  useEffect(() => {
    dispatch(getOneUser(userId));
  }, [dispatch, userId]);

  return (
    <ProfileContainer>
      <UserProfile />
    </ProfileContainer>
  );
};

export default Profile;
