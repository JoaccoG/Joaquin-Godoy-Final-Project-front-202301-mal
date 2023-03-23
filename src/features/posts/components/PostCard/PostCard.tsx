import { PostCardContainer } from './post-card-styled';
import { Post } from '../../../../models/post-model';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const ratingClasses = ['star-1', 'star-2', 'star-3', 'star-4', 'star-5'];
  for (let i = 0; i < post.rating; i++) {
    ratingClasses[i] += ' active';
  }

  const handleDateFormat = (date: number) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <PostCardContainer gameBanner={post.game.banner}>
      <section className="post-card__user-info">
        <Link to={`./user/${post.user.username}`}>
          <img
            src={post.user.avatar}
            alt={`Avatar of ${post.user.username}`}
            className="user-info__avatar"
          />
          <div className="user-info__username">
            <p>
              {post.user.name} {post.user.surname}
            </p>
            <span>@{post.user.username}</span>
          </div>
        </Link>
      </section>
      <section className="post-card__game-info">
        <Link to={`./games/${post.game.name}`}>
          <div className="game-info__banner" />
          <p className="game-info__name">{post.game.name}</p>
        </Link>
      </section>
      <section className="post-card__post-info">
        <ul className="post-info__rating">
          {ratingClasses.map((ratingClass) => (
            <li key={`${ratingClass}`}>
              <FontAwesomeIcon icon={solid('star')} className={ratingClass} />
            </li>
          ))}
        </ul>
        <div className="post-info__date">
          <FontAwesomeIcon
            icon={solid('calendar-alt')}
            className="date__icon"
          />
          <span>{handleDateFormat(post.date)}</span>
        </div>
      </section>
      <section className="post-card__review">
        <p className="review__text">{post.review}</p>
        <div className="review__img-container">
          {post.photo && (
            <img src={post.photo} alt={`About ${post.game.name}`} />
          )}
        </div>
      </section>
    </PostCardContainer>
  );
};

export default PostCard;
