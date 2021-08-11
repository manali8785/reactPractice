import styled from 'styled-components'
export const AppleMap = styled.div<{
    isVisible: boolean
  }>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  width: 100%;
  height: 400px;
`