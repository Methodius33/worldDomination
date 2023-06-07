import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ width = 4 }) => `repeat(${width}, 1fr)`};
  text-align: center;
`;

const CityWrapper = styled.div`
  background-color: ${({isDestroyed})=>( isDestroyed ? '#FFA3AF':'none')};
`; 

const ShieldLine = styled.div`
  background-color: ${({isShield})=>(isShield ?'#E0F8D1':'none')};
`

const Cities = ({ cities = {} }) => {
  return (
    <Wrapper width={Object.keys(cities).length}>
      {Object.values(cities).map((city) => (
        <CityWrapper key={city.id} isDestroyed ={city.isDestroyed}>
          <div>{city.name}</div>
          <div>{city.level} %</div>
          <ShieldLine isShield = {city.isShield}>
            {city.isDestroyed?'Разрушен':(city.isShield?'Есть щит':'Нет щита')}
          </ShieldLine>
        </CityWrapper>
      ))}
    </Wrapper>
  );
};

export default Cities;
