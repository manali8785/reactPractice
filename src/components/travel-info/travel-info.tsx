import {
    useQuery,   
    gql
  } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {StyledContainer} from "./travel-info-styled"
import {Header} from "./travel-info-styled"

  const Can_I_Go = gql`
  query CanIGo($from:String!, $to:String!) {
    canIGo(input: {from:$from, to:$to}) {
      fromCountry {
        name
        geocode {
          lat
          long
        }
      }
      toCountry {
        name
        geocode {
          lat
          long
        }
      }
      info {
        quarantine
        testing
        documents
      }
    }
  }      
`;


export function TravelInfo(props) {
    const { loading, error, data } = useQuery(Can_I_Go,{
      variables:{from:props.from,to:props.to}
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const res = data.canIGo.info;
    
    const info = (
      <StyledContainer>
        <Row>
          {
            Object.keys(res).slice(1).map((key, i) => (
              <Col key={i}>
                <Header>{key}</Header>
                <div>{res[key]}</div>
              </Col>
            ))
          }
        </Row>
      </StyledContainer>
    )
    return info;
}



