import { Icon } from 'components/Icon'
import * as S from  './styles'
import {ReviewProps} from './types'

const Review = ({review}: ReviewProps) => {
    return (
        <div>
            <S.Title>{'Reviews and Rating'}</S.Title>
            <Ratings star={review.star}/>
            <S.Desc>{review.comment}</S.Desc>
            <S.User>
                <img src={review.thumbnail} alt={review.username}/>
                <p>{review.username}</p>
            </S.User>
        </div>
    )
}

interface Props{
    star:number
}

const Ratings = ({star}:Props) => {
    
    return (
        <div>
            {[...Array(star).keys()].map(()=>(<Icon name='star' color='#FFCA42'/>))}
            {[...Array(5-star).keys()].map(()=>(<Icon name='star'/>))}
            {star}
        </div>
    )
}


export default Review
