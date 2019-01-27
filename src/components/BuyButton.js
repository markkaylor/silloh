import React from 'react';
import styled from 'styled-components';


const BuyBtn = styled.div`
    a {
        color: white;
        background-color: #4b6b9ec9;
        width: 120px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        padding: 20px 15px;
        text-decoration: none;
        box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
        border-radius: 3px;
        cursor: pointer;
    }
`

const BuyButton = (({post}) => {
    return (
    <BuyBtn>
        <a 
            id="buyButton"
            href="#"
            className='snipcart-add-item buyBtn'
            data-item-id={post.id}
            data-item-price={post.price}
            data-item-image={post.image}
            data-item-name={post.title}
            data-item-url={"https://snipcart-react-gatsby.netlify.com/" + post.path}>
            Buy for ${post.price}
        </a>
    </BuyBtn>
    )
})

export default BuyButton;