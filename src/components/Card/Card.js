import React from 'react'
import {Link} from 'react-router-dom'
import StatisticsItem from '../StatisticsItem/StatisticsItem'
import Description from '../Description/Description'

// Styles
import './Card.scss'

// Images
import relatedIcon from '../../assets/images/related.svg'
import keywordsIcon from '../../assets/images/keywords.svg'
import descIcon from '../../assets/images/desc.svg'
import statsIcon from '../../assets/images/stats.svg'

const Card = ({data, changeCompressed}) => {
    return (
        <div className='card' onClick={changeCompressed}>
            <h1 className="card__title">
                {data.title}
            </h1>
            <div className="card__subtitle">
                {data.subtitle}
            </div>
            <div className="card__content">
                <div className="card__location">
                    <img src={data.location} alt="location"/>
                </div>
                <div className="card__info">
                    <h4 className="card__section-name">
                        Related items
                        <img src={relatedIcon} alt="related"/>
                    </h4>
                    <div className="card__related">
                        {data.relatedItems.map(item => (
                            <Link className="card__related-item" to={item.to} key={item.name}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <h4 className="card__section-name">
                        Keywords
                        <img src={keywordsIcon} alt="keywords"/>
                    </h4>
                    <div className="card__keywords">
                        {data.keywords.map(item => (
                            <div className="card__keywords-item" key={item}>
                                <span>#</span><span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <h4 className="card__section-name">
                        Short description
                        <img src={descIcon} alt="desc"/>
                    </h4>
                    <div className="card__short-desc">
                        {data.desc.length > 100 ? data.desc.slice(0, 100) + '...' : data.desc}
                    </div>
                </div>
            </div>
            <div className="card__bottom">
                <div className="card__stats">
                    <h4 className="card__section-name">
                        Statistics
                        <img src={statsIcon} alt="desc"/>
                    </h4>
                   <div className="card__stats-wrap">
                       {data.statistics.map(stat => (
                           <StatisticsItem data={stat} key={stat.name}
                                           progress={stat.value.match(/[0-9]*\.?[0-9]+%/)}
                           />
                       ))}
                   </div>
                </div>
                <div className="card__desc">
                    <h4 className="card__section-name">
                        Full description
                        <img src={descIcon} alt="desc"/>
                    </h4>
                    <Description text={data.desc} />
                </div>
            </div>
        </div>
    )
}

export default Card
