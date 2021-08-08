import styled from 'styled-components'
import { screenSize } from '../../screen-size'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:800px;
    margin: 0 auto;
    
    @media (${screenSize.maxMobile}) {
        width: 70%;
    }
    @media (${screenSize.maxLaptop}) {
        width: 80%;
    }
`
export const Search = styled.div`
    display:flex;
    justify-content: space-evenly;
    padding: 20px 0px;
`


