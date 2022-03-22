import React from 'react'
import StatisticsItem from '../StatisticsItem/StatisticsItem'

// Styles
import '../Card/Card.scss'

// Images
import descIcon from '../../assets/images/desc.svg'
import statsIcon from '../../assets/images/stats.svg'

const CompressedCard = ({data}) => {
    return (
        <div className='card'>
            <h1 className="card__title card__title_compressed">
                {data.title}
            </h1>
            <div className="card__content card__content_compressed">
                <div className="card__location card__location_compressed">
                    <img src={data.location} alt="location"/>
                </div>
                <div className="card__info card__info_compressed">
                    <div className="card__stats">
                        <h4 className="card__section-name">
                            Statistics
                            <img src={statsIcon} alt="desc"/>
                        </h4>
                        <div className="card__stats-wrap card__stats-wrap_compressed">
                            {data.statistics.map(stat => (
                                <StatisticsItem data={stat} key={stat.name}
                                                progress={stat.value.match(/[0-9]*\.?[0-9]+%/)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompressedCard
