import React,{useState} from 'react'
import styled from 'styled-components'
import {ReactComponent as SearchIco} from '../images/icons/search-svgrepo-com.svg'
import {ReactComponent as LogoIco} from '../images/icons/netflix-svgrepo-com.svg'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation(){
  const [searchShow,setSearchShow] = useState(false);
  const searchRef = useRef();
  // const recentSearches = ["드라마","애니메이션","코미디","주인공","인기영화"];
  const [recentSearches , setRecentSearches] = useState([]);
  const searchMove = (event) => {
    event.preventDefault()
    recentSearchSave(searchRef.current.value)
    searchRef.current.value = '';
  }
  const recentSearchSave = (string) => {
    const getRecent = localStorage.getItem('searchRecent');
    const recentArr = `${getRecent === null ? string : string + "," + getRecent}` ;
    localStorage.removeItem('searchRecent');
    localStorage.setItem('searchRecent',recentArr,string)
    setRecentSearches(getRecent !== null && getRecent.split(','))
  }
  const searchOnChange = () => {

  }
  console.log("스탰",recentSearches);
  return (
    <Container>
      <Wrap>
          <LogoWrap>
            <LogoIco />
            <span>Movie</span>
          </LogoWrap>
          <SearchWrap searchShow={searchShow}>
            <Column>
              <form onSubmit={(event) => searchMove(event)}>
                <SearchIco/>
                <input ref={searchRef} placeholder='보고싶은 영화 ?' onChange={searchOnChange} onFocus={()=>setSearchShow(true)} onBlur={()=>setSearchShow(false)} />
                {/* <button>Go</button> */}
              </form>
              <SearchRecent show={searchShow}>
                <RecentWrap >
                  <SearchOption>Recent Searches</SearchOption>
                  {recentSearches.length > 0 && recentSearches.map((item)=>(
                    <SearchItem>{item}</SearchItem>
                  ))}
                </RecentWrap>
                
              </SearchRecent>
              
            </Column>
          
        </SearchWrap>
        <FavoriteWrap onClick={()=>{localStorage.clear()}}>
          즐겨찾기
        </FavoriteWrap>
        
      </Wrap>
    </Container>
  )
}

const Container = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.backColor};
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 70vw;
  margin: 0 auto;
`;
const Column = styled.div`
  position: relative;
`;
const LogoWrap = styled.div`
  transition: all 400ms ease;
  cursor: pointer;
  height: 30px;
  svg{
    fill: white;
    width: 30px;
    height: 30px;
  }
  span{
    margin-left: 5px;
  }
  @keyframes blink-effect {
  50% {
    opacity: 0;
    }
  }

  :hover{
    color: yellow;
    animation: blink-effect 2s ease infinite;
  }
`
const SearchWrap = styled.div`
  @media (max-width:768px) {
    display: none;
  }
  form {
    position: relative;
    display: flex;
    justify-content: center;
  align-items: center;
    width: 18vw;
    background-color: white;
    border-radius: 5px 5px 5px 5px;
    input{
    width: 100%;
    margin-left: 10px;
    font-size: 16px;
    white-space: nowrap;
    border: none;
    border-radius: 5px;
      :focus{
        outline: 0;
      }
    }
  }
  
  svg{
    margin-left: 5px;
    fill: gray;
    width: 24px;
    height: 24px;
    padding: 4px;
  }

`;
const SearchRecent = styled.div`
display: ${(props) => props.show ? "block" : "none" };
  position: absolute;
  width: 100%;
  background-color: black;
  color: black;
  font-size: 16px;
  height: 13rem;
  
  
`;
const RecentWrap = styled.div`
  padding: 0 10px;

`;
const SearchItem = styled.div`
  padding: 3px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid red;
`;
const SearchOption = styled.div`
  margin: 5px 0;
  border: none;
  font-weight: bold;
`;
const FavoriteWrap = styled.div`
  
  margin-left: 15px;
  font-size: 18px;
  
`;