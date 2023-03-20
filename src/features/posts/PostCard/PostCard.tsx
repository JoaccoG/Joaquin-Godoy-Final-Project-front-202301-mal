import { PostCardContainer } from './post-card-styled';
import { Post } from '../../../models/post-model';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const ratingClasses = ['star-1', 'star-2', 'star-3', 'star-4', 'star-5'];
  for (let i = 0; i < post.rating; i++) {
    ratingClasses[i] += ' active';
  }

  const handleDateFormat = (date: Date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <PostCardContainer>
      <section className="post-card__user-info">
        <Link to={`./user/${post.user.username}`}>
          <img
            src={post.user.avatar}
            alt={`Avatar of ${post.user.username}`}
            className="user-info__avatar"
          />
          <p className="user-info__username">@{post.user.username}</p>
        </Link>
      </section>
      <section className="post-card__game-info">
        <Link to={`./games/${post.game.name}`}>
          <img
            src={post.game.banner}
            alt={`Banner of the game ${post.game.name}`}
            className="game-info__banner"
          />
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
        <p className="post-info__review">{post.review}</p>
        {post.photo && <img src={post.photo} alt={`About ${post.game.name}`} />}
      </section>
      <section className="post-card__post-counters">
        <div className="post-counters__likes">
          <FontAwesomeIcon icon={regular('heart')} />
          <span>{post.likes} Likes</span>
        </div>
        <div className="post-counters__date">
          <FontAwesomeIcon icon={solid('calendar-alt')} />
          <span>{handleDateFormat(post.date)}</span>
        </div>
      </section>
    </PostCardContainer>
  );
};

export default PostCard;
