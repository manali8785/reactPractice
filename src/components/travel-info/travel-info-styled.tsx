import Container from "react-bootstrap/Container";
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const StyledContainer = styled(Container)`
  padding-bottom: 20px;
  font-size:0.75rem;
`;

export const Header = styled.div`
  font-size: 1rem;
  font-weight:600;
  color: #01426a;
`;

export const InfoRow = styled(Row)`
`;

export const InfoCol = styled(Col)`
  border-radius: 2px;
  padding: 15px 15px;
  background: #f5f5f5;
`;

export const Error = styled.div`
  font-size: 1rem;
  font-weight:600;
  color: red;
  margin: 0 auto;
`;