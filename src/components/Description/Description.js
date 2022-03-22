import React, { useEffect, useState } from 'react'

// Styles
import './Description.scss'

const Description = ({text}) => {
    const [content, setContent] = useState(text.length > 300 ? text.slice(0, 300) : text)

    const [openedText, setOpenedText] = useState(false)
    const [buttonText, setButtonText] = useState('more...')

    useEffect(() => {
        if (openedText) {
            setContent(text)
            setButtonText('...less')
        } else {
            setContent(text.slice(0, 300))
            setButtonText('more...')
        }
    }, [openedText])

    return (
        <div className='desc'>
            {content} {
                text.length > 300 && (
                    <button className='desc__btn' type='button' onClick={() => setOpenedText(!openedText)}>
                        {buttonText}
                    </button>
                )
            }
        </div>
    )
}

export default Description
