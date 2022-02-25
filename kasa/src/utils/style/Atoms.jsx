import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #FF6060;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `text-decoration: underline;`}
`