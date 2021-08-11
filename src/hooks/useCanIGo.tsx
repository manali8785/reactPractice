import {
    useQuery,   
    gql
  } from "@apollo/client";

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

export function useCanIGo(props){
  const { loading, error, data:travelinfo } = useQuery(Can_I_Go,{
    variables:{from:props.from,to:props.to},
    fetchPolicy:"no-cache"
  });
  return {loading, error, travelinfo};
}