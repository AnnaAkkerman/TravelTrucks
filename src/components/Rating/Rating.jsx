import css from "./Rating.module.css"; // Создайте этот файл CSS для стилей

const Rating = ({ rating }) => {
  const maxRating = 5; // Максимальное количество звездочек

  // Создаем массив с количеством звездочек
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div className={css.ratingContainer}>
      {stars.map((star) => (
        <span
          key={star}
          className={`${css.star} ${star <= rating ? css.filled : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
