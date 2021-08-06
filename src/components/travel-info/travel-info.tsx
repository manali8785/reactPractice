import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StyledContainer } from "./travel-info-styled"
import { Header } from "./travel-info-styled"
import { useCanIGo } from "../../hooks/useCanIGo";

export function TravelInfo(props) {
    const { loading, error, travelinfo } =useCanIGo(props)
    if(!travelinfo) return null;
    const info = travelinfo.canIGo.info;
  
    return(
      <StyledContainer>
        <Row>
          {
            Object.keys(info).slice(1).map((key, i) => (
              <Col key={i}>
                <Header>{key}</Header>
                <div>{info[key]}</div>
              </Col>
            ))
          }
        </Row>
      </StyledContainer> 
    )
 
}



