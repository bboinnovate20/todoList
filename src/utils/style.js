
import styled from 'styled-components'

const Wrapper = styled.div `
    position: relative;
    overflow: hidden;
    height: 100vh;
    max-width: 100vw;
    
    
    &:after {
        content: "";
        display: block;
        background-color: rgb(3, 123, 235);
        width: 150%;
        height: 70rem;
        border-radius: 100%;
        top: -650px;
        left: -300px;
        transform: rotate(-10deg);
        z-index: -99;
        position: absolute;
    }

    @media screen and (max-width:810px) {
        overflow: scroll;
        background-color: rgb(62, 156, 243);

        &:after {
            display: none;
        }
    }
`

export default Wrapper;