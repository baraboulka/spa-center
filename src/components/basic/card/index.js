import "./card.scss";

const Card = ({ image, alt, title, desc }) => {
  return (
    <div className="card">
      <img src={image} alt={alt} className="card__image" />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
