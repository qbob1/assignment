import React from 'react'
import cn from 'classnames'

// Styles
import './StatisticsItem.scss'

const StatisticsItem = ({data, progress}) => {
    return (
        <div className={cn({
            'stat__item': true,
            'stat__item_progress': progress,
            'stat__item_metric': !progress,
        })}>
            <span className='stat__item-name'>
                {data.name}
            </span>
            {
                progress && (
                    <div className='stat__item-wrap'>
                        <span className="stat__item-bar"
                              style={{width: data.value}}>
                            {data.value}
                        </span>
                    </div>
                )
            }
            {
                !progress && (
                    <div className='stat__item-metric'>
                        {data.value}
                    </div>
                )
            }
        </div>
    )
}

export default StatisticsItem
