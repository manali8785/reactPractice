import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledContainer, InfoRow, InfoCol } from "./travel-info-styled"
import { Header } from "./travel-info-styled"
import { useCanIGo } from "../../hooks/useCanIGo";

export function TravelInfo(props) {
    const { loading, error, travelinfo } = useCanIGo(props)

    if(!travelinfo) return null;
    const info = travelinfo.canIGo.info;
    return(
      <StyledContainer>
        <InfoRow>
          {
            Object.keys(info).slice(1).map((key, i) => (
              <InfoCol key={i} md={{ span: 4 }}>
                <Header>{key}</Header>
                <div>{info[key]}</div>
              </InfoCol>
            ))
          }
        </InfoRow>
      </StyledContainer> 
    )
 
}



