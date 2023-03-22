import styled from 'styled-components/macro';
import theme from 'style/theme';

const StyledTitle = styled.h2`
  width: inherit;
  font-size: 2.125rem;
  color: ${theme.blue};
  font-weight: bold;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const Title = ({ style, children, ...rest }) => {
  return <StyledTitle style={style}>{children}</StyledTitle>;
};

export default Title;
