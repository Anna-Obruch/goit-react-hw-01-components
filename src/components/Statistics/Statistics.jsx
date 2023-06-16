import PropTypes from 'prop-types';
import {StatisticsCard, StatisticsTitle, StatList, StatItem, ItemLabel, ItemPercentage } from './Statistics.module'
import getRandomHexColor from "./GetRandomColor";
export const Statistics = ({title, stats}) => {
    return(
        <StatisticsCard>
  {title && <StatisticsTitle>{title}</StatisticsTitle>}

  <StatList>
    {stats.map(({id, label ,percentage}) =>(
    <StatItem key={id} style={{backgroundColor: getRandomHexColor()}}>
    <ItemLabel>{label}</ItemLabel>
    <ItemPercentage>{percentage}</ItemPercentage>
    </StatItem>
    ))}
    
  </StatList>
</StatisticsCard>
    )
    }
Statistics.propTypes ={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired

}