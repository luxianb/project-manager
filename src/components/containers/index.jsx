import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`

export const Main = styled.main`
  background-color: #eceff1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow: scroll;
  flex: 1;
  margin: 0 -2rem;
  padding: 0 2rem;
  @media(max-width: 425px) {
    /* flex-direction: column; */
  }
`;

export const ProjectContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  flex: 1;
  padding: 2rem 1rem;
  height: 100%;
  @media(max-width: 425px) {
    width: 100%;
    flex-direction: column;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;