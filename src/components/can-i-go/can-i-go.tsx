import {
    useQuery,   
    gql
  } from "@apollo/client";


  const Can_I_Go = gql`
  query CanIGo {
    canIGo(input: {from:"UK", to:"US"}) {
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

const CanIGo = () => {
    const { loading, error, data } = useQuery(Can_I_Go);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const res = <div>{data.canIGo.fromCountry.name} {data.canIGo.toCountry.name}</div>
    return res;
  }

  export default CanIGo;

