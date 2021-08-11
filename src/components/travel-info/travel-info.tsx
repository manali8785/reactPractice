import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledContainer, InfoRow, InfoCol, Error } from "./travel-info-styled"
import { Header } from "./travel-info-styled"
import { useCanIGo } from "../../hooks/useCanIGo";

export function TravelInfo(props) {
    const { loading, error, travelinfo } = useCanIGo(props)

    if(error) return(<Error>Data not found!!</Error>)
    
    if(!travelinfo) return null;

    var info = travelinfo.canIGo.info;

    return(
      <StyledContainer>
        <InfoRow>
          {
            Object.keys(info).map((key, i) => {
              if(key === "__typename") return null;  
              return(
                <InfoCol key={i} md={{ span: 4 }}>
                  <Header>{key}</Header>
                  <div>{info[key]}</div>
                </InfoCol>
              )
            })
          }
        </InfoRow>
      </StyledContainer> 
    )
 
}



