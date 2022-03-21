import styled from 'styled-components';
import dayjs from 'dayjs';

export default function Entry({ text, author, color, onClick, createdAt }) {
  return (
    <Card onClick={onClick} color={color}>
      {text} ({author})
      <small>{dayjs(createdAt).format('DD.MM.YYYY HH:mm')}</small>
    </Card>
  );
}
const Card = styled.section`
  background-color: ${props => (props.color ? props.color : 'hotpink')};
  padding: 20px;
  max-width: 400px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
