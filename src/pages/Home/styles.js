import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background: ${(props) => props.theme.colors.background};
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

export const Logo = styled.img`
  margin-bottom: 15px;
`;

export const Map = styled.div`
  background: red;
  width: 500px;
`;
