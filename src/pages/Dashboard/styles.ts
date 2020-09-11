import styled from 'styled-components';

interface CardProps {
  card?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
   h3{
     margin-left: 45px;
     margin-top: 60px;
   }

`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ card }: CardProps): string => (card ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ card }: CardProps): string => (card ? '#fff' : '#363F5F')};
  transition: transform 0.2s;
      &:hover {
          transform: translateX(10px)
      }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const Historics = styled.div`
  margin-top: 50px;
  max-width: 700px;
  margin-right: 150px;

  a {
      background: #fff;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
      display: block;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: transform 0.2s;
      &:hover {
          transform: translateX(10px)
      }
      & + a {
          margin-top: 16px;
          margin-right: 16px;
      }

      img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
      }
      div {
          margin: 0 16px;
          flex: 1;
          strong {
              font-size: 20px;
              color: #3D3D4D;
          }
          p {
              font-size: 18px;
              color: #A8A8B3;
              margin-top: 4px;
          }
      }

  }

`;
