import React from 'react'
import styles from '../../styles/AboutUs.css'

const details = document.querySelectorAll('details');

details.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        const openItem = document.querySelector('details[open]');

        if (openItem) openItem.open = false;

        if (openItem !== item) item.open = true
    })
})

function AboutUs() {
    return (
        <div>
            <div className='About_Store'>About our store</div>
            <p className='txt'>The STUFF online store is a trading platform for home and comfort goods, which is the Official Exclusive Representative of , a seven-time winner of the prestigious “Choice of the Year” award in Kyrgyzstan.

                Our online store offers more than 14,865 items and 237,107 units of goods from brands in Europe, the near and far abroad.


                STUFF today includes more than 70 product categories! Now shopping through the online store will become even more convenient!!! The entire range of products from our retail outlets is collected in one store:</p>
            <div className='zogo'>FAQ</div>
            <details className="details">
                <summary className="details__title">Question 1</summary>
                <div class="details__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis beatae itaque! Maxime consequuntur architecto, voluptatibus iste aliquid quaerat dolores, culpa repellendus optio omnis rem saepe quisquam incidunt, numquam molestias?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis beatae itaque! Maxime consequuntur architecto, voluptatibus iste aliquid quaerat dolores, culpa repellendus optio omnis rem saepe quisquam incidunt, numquam molestias?</p>
                </div>
            </details>
            <details className="details">
                <summary className="details__title">Question 2</summary>
                <div class="details__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis beatae itaque! Maxime consequuntur architecto, voluptatibus iste aliquid quaerat dolores, culpa repellendus optio omnis rem saepe quisquam incidunt, numquam molestias?</p>
                </div>
            </details>
            <details className="details">
                <summary className="details__title">Question 3</summary>
                <div class="details__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis beatae itaque! Maxime consequuntur architecto, voluptatibus iste aliquid quaerat dolores, culpa repellendus optio omnis rem saepe quisquam incidunt, numquam molestias?</p>
                </div>
            </details>
            <details className="details">
                <summary className="details__title">Question 4</summary>
                <div className="details__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis beatae itaque! Maxime consequuntur architecto, voluptatibus iste aliquid quaerat dolores, culpa repellendus optio omnis rem saepe quisquam incidunt, numquam molestias?</p>
                </div>
            </details>

        </div>
    )
}

export default AboutUs
