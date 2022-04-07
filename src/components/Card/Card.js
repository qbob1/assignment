import React, { useState } from 'react'
import StatisticsItem from '../StatisticsItem/StatisticsItem'
import Description from '../Description/Description'
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";
// Styles
import './Card.scss'

import { BsFillInfoSquareFill } from 'react-icons/bs';

// Images
import relatedIcon from '../../assets/images/related.svg'
import keywordsIcon from '../../assets/images/keywords.svg'
import descIcon from '../../assets/images/desc.svg'
import statsIcon from '../../assets/images/stats.svg'

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const keywords = (data) => {
    return (
        <div>
            <h4 className="card__section-name">
                Keywords
                <img src={keywordsIcon} alt="keywords" />
            </h4>
            <div className="card__keywords">
                {data.keywords.map(item => (
                    <div className="card__keywords-item" key={item}>
                        <span>#</span><span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const related = (data) => {
    return (
        <div>
            <h4 className="card__section-name">
                Related items
                <img src={relatedIcon} alt="related" />
            </h4>
            <div className="card__related">

                {data.relatedItems.map((item, i) => (
                    //<Link className="card__related-item" to={item.to} key={item.name}>
                    <a >
                        {item.name}
                    </a>
                    // </Link>
                ))}

            </div>
        </div>
    )
}

const shortDesc = (data) => {
    return (
        <div>
            <h4 className="card__section-name">
                Short description
                <img src={descIcon} alt="desc" />
            </h4>
            <div className="card__short-desc">
                {data.desc.length > 100 ? data.desc.slice(0, 100) + '...' : data.desc}
            </div>
        </div>
    )
}

const fullDescription = (data) => {
    return (
        <div className="card__desc">
            <h4 className="card__section-name">
                Full description
                <img src={descIcon} alt="desc" />
            </h4>
            <Description text={data.desc} />
        </div>
    )
}

const stats = (data) => {
    return (
        <div className="card__stats">
            <h4 className="card__section-name">
                Statistics
                <img src={statsIcon} alt="desc" />
            </h4>
            <div className="card__stats-wrap">
                {data.statistics.sort(s=>s.value.match(/[0-9]*\.?[0-9]+%/)).map(stat => (
                    <StatisticsItem data={stat} key={stat.name}
                        progress={stat.value.match(/[0-9]*\.?[0-9]+%/)}
                    />
                ))}
            </div>
        </div>
    )
}


const Card = ({ data }) => {
    let [compressed, setCompressed] = useState(true); 

    return (
        <div className='card'>
            <h1 className="card__title">
                {data.title}
            </h1>
            <div className="card__subtitle">
                {data.subtitle}
            </div>
            <div>
                <div className="card__content">
                    <div className="card__location">
                        <ComposableMap
                            projection="geoAzimuthalEqualArea"
                            projectionConfig={{
                                rotate: [58, 20, 0],
                                scale: 400
                            }}
                        >
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies
                                        .filter(d => d.properties.REGION_UN === "Americas")
                                        .map(geo => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#EAEAEC"
                                                stroke="#D6D6DA"
                                            />
                                        ))
                                }
                            </Geographies>
                        </ComposableMap>
                        
                    </div>
                    {stats(data)}
                </div>
                <div className="card__info">
                    {keywords(data)}
                    <BsFillInfoSquareFill onClick={()=>setCompressed(!compressed)}/>
                </div>
            </div>
            <div className="card__bottom">
            {!compressed && related(data)}
            {!compressed && fullDescription(data)}
            </div>
        </div>
    )
}

export default Card
