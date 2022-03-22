import React from 'react'
import StatisticsItem from '../StatisticsItem/StatisticsItem'

// Styles
import '../Card/Card.scss'

// Images
import statsIcon from '../../assets/images/stats.svg'
import keywordsIcon from '../../assets/images/keywords.svg'

const CompressedCard = ({data, changeCompressed}) => {
    return (
        <div className='card' onClick={changeCompressed}>
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
            <div className="card__keywords-wrap">
                <h4 className="card__section-name">
                    Keywords
                    <img src={keywordsIcon} alt="keywords"/>
                </h4>
                <div className="card__keywords card__keywords_compressed">
                    {data.keywords.map(item => (
                        <div className="card__keywords-item card__keywords-item_compressed" key={item}>
                            <span>#</span><span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CompressedCard
