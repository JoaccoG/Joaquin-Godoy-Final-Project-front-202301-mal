import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { PostFormContainer, PostFormFeedback } from './post-form-styled';
import { createNewPost, selectPostsSlice } from '../posts-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FC, useRef } from 'react';
import Spinner from '../../../shared/Loading/Loading';

interface PostFormProps {
  games: string[];
}

const PostForm: FC<PostFormProps> = ({ games }) => {
  const dispatch = useAppDispatch();
  const { status, postCreationStatus, postCreationMsg } =
    useAppSelector(selectPostsSlice);
  const formRef = useRef<HTMLFormElement>(null);

  const postFeedback = () => {
    switch (postCreationStatus) {
      case 'idle':
        return (
          <PostFormFeedback postStatus={postCreationStatus}>
            Post something new...
          </PostFormFeedback>
        );
      case 'success':
        return (
          <PostFormFeedback postStatus={postCreationStatus}>
            Your post has been created!
          </PostFormFeedback>
        );
      case 'error':
        return (
          <PostFormFeedback postStatus={postCreationStatus}>
            Error during post creation, please try again later. (
            {postCreationMsg})
          </PostFormFeedback>
        );
    }
  };

  return (
    <>
      <PostFormContainer
        ref={formRef}
        data-testid="posts-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(createNewPost(e.currentTarget));
        }}
      >
        {status === 'loading' ? (
          <Spinner color="tertiary" size={150} />
        ) : (
          <>
            {postFeedback()}
            <div className="post-form__wrapper-1">
              <label htmlFor="game">
                <select
                  id="game"
                  name="game"
                  required
                  defaultValue=""
                  data-testid="game"
                >
                  <option value="" disabled>
                    Choose a game
                  </option>
                  {games.map((game) => (
                    <option
                      key={game}
                      value={game}
                      data-testid={`game-${game}`}
                    >
                      {game}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="rating">
                <select
                  id="rating"
                  name="rating"
                  required
                  defaultValue=""
                  data-testid="rating"
                >
                  <option value="" disabled>
                    Rate your game
                  </option>
                  {Array.from({ length: 5 }, (_asd, i) => (
                    <option
                      key={i + 1}
                      value={i + 1}
                      data-testid={`rating-${i + 1}`}
                    >
                      {i + 1}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label htmlFor="review">
              <textarea
                required
                id="review"
                name="review"
                placeholder="Tell others your experience..."
                maxLength={300}
                data-testid="review"
              />
            </label>
            <div className="post-form__wrapper-2">
              <label htmlFor="photo">
                <FontAwesomeIcon
                  className="wrapper-2__file-upload-icon"
                  icon={solid('image')}
                />
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  data-testid="photo"
                />
              </label>
              <button type="submit">Post</button>
            </div>
          </>
        )}
      </PostFormContainer>
    </>
  );
};

export default PostForm;
