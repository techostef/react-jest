import { css } from '@emotion/css';
import { Link } from "react-router-dom";

import { IFavorite } from '../types';
import { RECIPE_DETAIL_URL } from '../constants';

interface IProps {
  item: IFavorite
}

function RecipeCard ({ item }: IProps) {
  return (
    <div className={styles.container}>
      <Link to={{
        pathname: `${RECIPE_DETAIL_URL}/${item.idMeal}`,
      }} className={styles.cursor}>
        <img src={item.strMealThumb ?? ''} width={150} />
        <b>
          {item.strMeal}
        </b>
      </Link>
    </div>
  )
} 

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    width: 150
  }),
  cursor: css({
    cursor: 'pointer',
    overflowWrap: 'break-word',
  })
}

export default RecipeCard;