import styled from "styled-components"

const NavContainer = styled.div`

  display: flex;
  justify-content: space-between;
  background-color: #C8B8DB;
  font-family: 'Oxygen Mono', monospace;


`;

const LogoContainer = styled.div`

  font-size: 32px;
  margin: 20px;
  
  a{
    
    text-decoration: none;
    
    span{
    
      color: #fff;
    
    }

  }
  
  
`;

const Cursor = styled.span`

  &:after{
    content: "|";
    opacity: 0;
    animation: cursor 1s infinite;
  }

  @keyframes cursor{

    0%{
      opacity: 0;
    }
    40%{
      opacity: 0;
    }
    50%{
      opacity: 1;
    }
    90%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }

  }

`;


const Navigation = styled.div`

  li{

    list-style: none;
    display: inline-block;
    margin: 30px 20px;
    position: relative;
    border-radius: 5px;


    a{

      text-decoration: none;
      color: #fff;
      font-size: 22px;
      padding: 8px 16px;


    }

    &::before{

      content: "";
      height: 3px;
      width: 0%;
      background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
      position: absolute;
      left: 0;
      bottom: -10px;
      transition: 0.4s ease-out;

    }

    &:hover::before{

      width: 100%;

    }

    &:hover{

      background-color: #A5CAD2;

    }

  }

`;

export default function Navbar({path}) {
  return (
    <NavContainer>
      <LogoContainer>
        <a href="/">
          <span>
            ~/{path}
            <Cursor/>
          </span>
        </a>
      </LogoContainer>
    <Navigation>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </Navigation>
    </NavContainer>
  )
}
