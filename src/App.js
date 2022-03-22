import React, { useMemo } from 'react'
import Card from './components/Card/Card'

// Styles
import './styles/general.scss'

const App = () => {
    const cardData = useMemo(() => ({
        title: 'Test card title',
        subtitle: 'Test subtitle',
        location: 'https://leptonsoftware.com/wp-content/uploads/2021/08/Location-Intelligence-Solutions-by-Lepton-Software-min.jpg',
        statistics: [
            {name: 'x', value: '25%'},
            {name: 'y', value: '50%'},
            {name: 'z', value: '15%'},
            {name: 'a', value: '25'},
            {name: 'b', value: '35'},
            {name: 'c', value: '85%'},
            {name: 'v', value: '145'},
            {name: 'm', value: '10%'},
            {name: 't', value: '60%'},
            {name: 'u', value: '10'},
        ],
        relatedItems: [
            {name: 'item1', to: '/'},
            {name: 'item2', to: '/'},
            {name: 'item3', to: '/'},
            {name: 'item4', to: '/'},
            {name: 'item5', to: '/'},
            {name: 'item6', to: '/'},
            {name: 'item7', to: '/'},
            {name: 'item8', to: '/'},
            {name: 'item9', to: '/'},
        ],
        keywords: ['text', 'key', 'title', 'product'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci architecto, aut consectetur cumque dignissimos dolore ea eaque enim error facilis harum illum ipsum laboriosam, laudantium maiores minus nisi voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci architecto, aut consectetur cumque dignissimos dolore ea eaque enim error facilis harum illum ipsum laboriosam, laudantium maiores minus nisi voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci architecto, aut consectetur cumque dignissimos dolore ea eaque enim error facilis harum illum ipsum laboriosam, laudantium maiores minus nisi voluptatum.',
    }), [])

    return (
        <div>
            <div className='container'>
                <Card data={cardData} />
            </div>
        </div>
    )
}

export default App
