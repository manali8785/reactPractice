import {
    useQuery,   
    gql
  } from "@apollo/client";
import Container from './travel-info-styled'

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
    const res = data.canIGo;
    const info = (
      <Container>
        <li>{res.info.quarantine}</li>
        <li>{res.info.testing}</li> 
        <li>{res.info.documents}</li>
      </Container>
    )
    return info;
}



