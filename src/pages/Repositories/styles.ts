import styled from 'styled-components'

export const Header = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-between;
 img {
          width: 100%;
          height: 300px;
      }
 a{
     display: flex;
     align-items: center;
     text-decoration: none;
     color: #a8a8b3;

     &:hover {
         color: #666;
     }

 }

`;

export const RepositoryInfo = styled.section`
 margin-top: 80px;
 header {
     display: flex;
     align-items: center;
     img{
         width: 120px;
         height: 120px;
         border-radius: 50%;

     }
     div {
         margin-left: 24px;
         strong {
             font-size: 36px;
             color: #3d3d4d;
         }
         p{
             font-size: 18px;
             color: #737380;
             margin-top: 4px;
         }
     }
 }
     ul {
         display: flex;
         list-style: none;
         margin-top: 40px;
     }
     li {
         & + li {
             margin-left: 80px;
         }
         strong {
             display: block;
             font-size: 36px;
             color: #3d3d4d;
         }
         span {
             display: block;
             margin-top: 4px;
             color: #6c6c80;
         }
     }
 }

`;

export const Issues = styled.div`
  margin-top: 80px;


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
export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }


    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

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