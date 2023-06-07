import styled from "styled-components"
import React from "react";

const Wrapper = styled.div`
    text-align: center;
`;

const CountryWrapper = styled.div`
    margin-top: 8px;
    display:grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    text-align:right;
    gap:4px;
`
const ActiveLine = styled.div`
    background-color: ${({isActive, color})=>(isActive? color:'none')};
    text-align: center;
`
const NameWrapper = styled.div`
    width: fit-content;
    justify-self: center;
    word-wrap: break-word;

`

const Countries = ({text='', countries = {}, color ='#FFA3AF'})=>{
    return(
        <Wrapper>
            <div>{text}</div>
            <CountryWrapper>
                {Object.values(countries).map((country)=>(
                    <React.Fragment key={country.id}>
                        <NameWrapper>{country.name}</NameWrapper>
                        <ActiveLine isActive = {country.isActive} color ={color}>
                            {country.isActive ? 'Да' :'Нет'}
                        </ActiveLine>
                    </React.Fragment>
                ))}
            </CountryWrapper>
        </Wrapper>
    )
}
export default Countries