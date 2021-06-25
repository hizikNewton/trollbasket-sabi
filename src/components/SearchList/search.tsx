import { Link } from "react-router-dom";
import * as S from "./styles";

interface Props {
  data: Array<Product>;
}

const SearchList = ({ data }: Props) => {
  return (
    <>
      {
        <S.SearchContainer>
          {data?.map(({ thumbnail, name, id, desc }) => {
            return (
              <S.SList>
                <Link to={`/product-detail/${id}`}>
                  <S.Item>
                    <img src={thumbnail} alt="svg-thumbnail" />
                    <div>
                      <h4>{name}</h4>
                      <p>{desc}</p>
                    </div>
                  </S.Item>
                </Link>
              </S.SList>
            );
          })}
        </S.SearchContainer>
      }
    </>
  );
};

export default SearchList;
