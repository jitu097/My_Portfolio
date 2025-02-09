import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .domains {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .domain {
      flex: 1;
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      max-width: 380px;
      display: flex;
      flex-direction: column;
      min-height: 450px;
      
      header {
        margin-bottom: 1rem;
      }

      .body {
        flex: 1;
        display: flex;
        flex-direction: column;

        h3 {
          margin-bottom: 1rem;
        }

        p {
          margin-bottom: 2rem;
          flex: 1;
        }

        .progress-btn {
          width: fit-content;
          margin-bottom: 1.5rem;
          padding: 0.8rem 1.5rem;
          background: #23ce6b;
          border: none;
          border-radius: 0.6rem;
          transition: 0.25s;
          cursor: pointer;

          &:hover {
            background: #1ca757;
          }
        }
      }

      footer {
        margin-top: auto;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 1rem;

        .tech-list {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
      }
      
      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }
    }
  }



  @media (max-width: 960px) {
    .domains {
      flex-direction: column;
      align-items: center;
    }


  }
`;