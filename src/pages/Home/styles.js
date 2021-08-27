import styled from 'styled-components';

export const Container = styled.aside`
  background: ${(props) => props.theme.colors.primary};
  width: 360px;
  height: 100vh;
  overflow-y: hidden;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding: 16px;
`;
