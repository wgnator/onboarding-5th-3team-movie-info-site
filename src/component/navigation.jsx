import React,{useState} from 'react'
import styled from 'styled-components'
import {ReactComponent as SearchIco} from '../images/icons/search-svgrepo-com.svg'
import {ReactComponent as LogoIco} from '../images/icons/netflix-svgrepo-com.svg'
import { useRef } from 'react';
import { useMovieModel } from '../models/useMovieModel';

export default function Navigation(){
  const { getMovies, movies } = useMovieModel(); 
  const [relatedSearch,setRelatedSearch] = useState();
  const [isLoading,setIsLoading] = useState(true);
  const [searchReady,setSearchReady] = useState(false);
  const [searchShow,setSearchShow] = useState(false);
  const searchRef = useRef();
  const [recentSearches , setRecentSearches] = useState([]);
  const resultTitles = []
  // const {moviesTitle,setMoviesTitle} = useState([]);
  const [isLogin,setIsLogin] = useState(false);
  React.useEffect(()=>{
    getMovies()
      // setMoviesTitle(title !== undefined && title);
  },[])
  React.useEffect(()=>{
    if(movies){
      setIsLoading(false);
      getRecentSearch();
    }
  },[movies])

  const  getMovieTitle = (searchRef) => {
    
    const result = movies?.results.filter(data=>{
      return data.original_title.toLowerCase().includes(searchRef.toLowerCase())
    })
    setRelatedSearch(result)
  }

  const moveToSearchPath = (event) => {
    event.preventDefault()
    saveRecentSearch(searchRef.current.value)
    searchRef.current.value = '';
  }
  const getRecentSearch = () => {
    const getRecent = localStorage.getItem('searchRecent');
    setRecentSearches(getRecent !== null && getRecent.split(','))
  }
  const saveRecentSearch = (string) => {
    const getRecent = localStorage.getItem('searchRecent');
    const recentArr = `${getRecent === null ? string : string + "," + getRecent}` ;
    localStorage.removeItem('searchRecent');
    localStorage.setItem('searchRecent',recentArr)
    setRecentSearches(getRecent !== null && getRecent.split(','))
  }

  const searchOnChange = () => {
    const searchInput = searchRef.current.value;
    if(searchInput === ""){
      setSearchReady(false)
      return
    }
    setSearchReady(true)
    getMovieTitle(searchInput);
  }
  console.log(searchReady);
  console.log(relatedSearch);
  if(searchReady){
    relatedSearch.map((data)=>{
    console.log(data.original_title);
  })
  }
  return (
    <Container>
      <Wrap>
          <LogoWrap>
            <LogoIco />
            <span>Movie</span>
          </LogoWrap>
          <SearchWrap show={searchShow}>
              <form onSubmit={(event) => moveToSearchPath(event)}>
                <SearchIco/>
                <input ref={searchRef} placeholder='보고싶은 영화 ?' onChange={searchOnChange} onFocus={()=>setSearchShow(true)} onBlur={()=>setSearchShow(false)}/>
              </form>
              <SearchBox show={searchShow}>
                <RecentWrap show={searchShow}>
                  <SearchOption show={searchShow}>{searchReady ? "Related Searchs" : "Recent Searches"}</SearchOption>
                    {
                      searchReady ? 
                        relatedSearch.map((item,index)=>(
                          <SearchItem show={searchShow} key={index}>{item.original_title}</SearchItem>
                        ))
                      : recentSearches.length > 0 && 
                      recentSearches?.map((item,index)=>(
                      index > 4 ? 
                      null : 
                      <SearchItem show={searchShow} key={index}>{item}</SearchItem>
                    ))}
                </RecentWrap> 
              </SearchBox>
        </SearchWrap>
        <FavoriteWrap onClick={()=>{localStorage.clear()}}>
          {isLogin ? 
          <div>
            <button>login</button>
            <button>Sign Up</button>
          </div> :
          <div>즐겨찾기</div>}
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
  position: relative;
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
    border-radius: ${(props) => props.show ? "5px 5px 0 0" : "5px 5px 5px 5px" };
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
const SearchBox = styled.div`
  position: absolute;
  display: flexbox;
  width: 100%;
  font-size: 16px;
  transition: all 0.5s ease;
  border-radius:0 0 5px 5px;
  background-color: white;
  visibility: hidden;

  border: 1px solid black;
  
  ${(props) => props.show && `
    visibility:visible;

  `}
  div{
    color: black;
  }
`;
const RecentWrap = styled.div`
  width: 100%;
  padding-bottom: 0px;
  overflow: hidden;
  color: black;
  transition: all 1s ease;
  ${(props) => props.show && `
    transform: scale(1);
    padding-bottom: 5px;
  `}
`;
const SearchOption = styled.div`
  display: none;
  margin: 5px 5px;
  border: none;
  font-size: 0px;
  font-weight: bold;
  transition: all 2s ease;
  ${(props) => props.show && `
    display:block;
    font-size: 16px;
  `}
`;
const SearchItem = styled.div`
  display: none;
  animation: fadeInText 3s 2s ease-out forwards;
  padding: 5px;
  margin: 5px 5px 0 5px;
  font-size: 16px;
  border-radius: 5px;
  transition: all 3s ease;
  border: 1px solid black;
  ${(props) => props.show && `
    display:block;
    border: 1px solid black
    font-size: 16px;
  `}
`;

const FavoriteWrap = styled.div`
  margin-left: 15px;
  font-size: 18px;
  
`;