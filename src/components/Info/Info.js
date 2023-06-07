import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: column;
    text-align: center;
`;

const Nuclear = styled.div`
    background-color: ${({isNuclear})=>(isNuclear ? '#81FFEE':'none')};
`
const Bomb =styled.div`
    background-color: ${({isNuclear})=>(isNuclear ? 'none':'#C0C0C0')};
`
const Ecology = styled.div`
  background: linear-gradient(to right,'#81FFEE' 50%, '#FFA3AF');
`

const Info = ({isNuclear=false, bombCount=0, ecology=0, amount=0}) => {
  return (
    <Wrapper >
        <div>Ядерная технология</div>
        <Nuclear isNuclear ={isNuclear}>{isNuclear ? 'Исследована':'Не исследована'}</Nuclear>
        <div>Количество бомб</div>
        <Bomb isNuclear= {isNuclear}>{bombCount}</Bomb>
        <div>Уровень Экологии</div>
        <Ecology>{ecology} %</Ecology>
        <div>Бюджет</div>
        <div>{amount}</div>
    </Wrapper>
  );
};

export default Info;
