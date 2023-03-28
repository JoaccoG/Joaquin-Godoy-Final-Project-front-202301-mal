import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import Spinner from '../../../../../shared/Loading/Loading';
import {
  addUserFollower,
  getOneUser,
  getPostsByUser,
  removeUserFollower,
  resetStates,
  selectUserSlice,
} from '../../users-slice';
import UserPosts from '../UserPosts/UserPosts';
import { UserProfileContainer } from './user-profile-styled';

interface UserProfileProps {
  userId: string;
}

const UserProfile: FC<UserProfileProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  const {
    user,
    userPosts,
    getOneUserStatus,
    userPostsCount,
    followUserStatus,
  } = useAppSelector(selectUserSlice);

  useEffect(() => {
    dispatch(resetStates());
    dispatch(getOneUser(userId));
    dispatch(getPostsByUser({ userId: userId, offset: 0, limit: 4 }));
  }, [dispatch, userId]);

  const handleFollows = () => {
    if (user.isFollower) {
      dispatch(removeUserFollower(userId));
    } else {
      dispatch(addUserFollower(userId));
    }
  };

  const profileStatus = () => {
    switch (getOneUserStatus) {
      case 'success':
        return (
          <UserProfileContainer>
            <section className="user-profile__avatar">
              <img
                src={user.avatar}
                alt={`${user.username}'s avatar`}
                className="hero-container__avatar"
              />
            </section>
            <section className="user-profile__credentials">
              <div className="profile-hero__container">
                <div className="hero-container__buttons">
                  {sessionStorage.getItem('user') === userId ? (
                    <button type="button">Edit profile</button>
                  ) : (
                    <>
                      <button
                        type="button"
                        data-testid="follow-btn"
                        onClick={() => handleFollows()}
                        disabled={followUserStatus === 'loading'}
                      >
                        {followUserStatus === 'loading' ? (
                          <Spinner size={32} color="primary" />
                        ) : (
                          <>{user.isFollower ? 'Unfollow' : 'Follow'}</>
                        )}
                      </button>
                      <button type="button">Message</button>
                    </>
                  )}
                </div>
              </div>
              <div className="profile-hero__username">
                <h1>
                  {user.name} {user.surname}
                </h1>
                <span>@{user.username}</span>
              </div>
            </section>
            <section className="user-profile__info">
              <div className="profile-info__bio">
                <p>{user.biography}</p>
              </div>
              <div className="profile-info__stats">
                <div className="stats__counter">
                  <p>{String(user.followersCount)}</p>
                  <span>Followers</span>
                </div>
                <div className="stats__separator"></div>
                <div className="stats__counter">
                  <p>{String(userPostsCount)}</p>
                  <span>Posts</span>
                </div>
                <div className="stats__separator"></div>
                <div className="stats__counter">
                  <p>{String(user.followingCount)}</p>
                  <span>Following</span>
                </div>
              </div>
              <div className="profile-info__fav-games">
                <h2>Favourite games</h2>
                <div className="fav-games__container">
                  {/* Add GameCard and GameCardList, passing the favGames array by props */}
                  {['Game 1', 'Game 2', 'Game 3'].map((game, i) => (
                    <div className="fav-games__game" key={game}>
                      <p>{game}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="user-profile__posts">
              <h2>Posts</h2>
              <div className="profile-posts__container">
                <UserPosts userId={userId} userPosts={userPosts} />
              </div>
            </section>
          </UserProfileContainer>
        );
      case 'error':
        return <p>Unexpected error while getting user data</p>;
      default:
        return <Spinner size={200} color={'tertiary'} />;
    }
  };

  return profileStatus();
};

export default UserProfile;
