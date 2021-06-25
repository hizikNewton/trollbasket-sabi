import { Star } from "assets/icons";
import { Icon } from "components/Icon";
import { gray, white } from "globalStyles/constants";
import * as S from "./styles";
import { ReviewProps } from "./types";
import { ReactComponent as UserSvg } from "assets/user.svg";
import { SVGContainer } from "components/IconButton/styles";

const Review = ({ review }: ReviewProps) => {
  return (
    <S.Review>
      <S.Title>
        {"Reviews and Rating"}
        <a href="/">{"View all"}</a>
      </S.Title>

      <Ratings star={review.star} />
      <S.Desc>{review.comment}</S.Desc>
      <S.User>
        <SVGContainer backgroundColor={white}>
          <UserSvg />
        </SVGContainer>
        <p>{review.username}</p>
      </S.User>
    </S.Review>
  );
};

interface Props {
  star: number;
}

const Ratings = ({ star }: Props) => {
  return (
    <S.StarRating>
      {[...Array(star).keys()].map(() => (
        <Icon svg={<Star />} />
      ))}
      {[...Array(5 - star).keys()].map(() => (
        <Icon svg={<Star fill={gray} />} />
      ))}
      {star}
    </S.StarRating>
  );
};

export default Review;
