import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { FaArrowLeft, FaUserFriends, FaBookMedical } from 'react-icons/fa';
import SubPage1 from "./SubPage1";

// 전체 레이아웃을 Flexbox로 설정
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

// Header 스타일 컴포넌트
const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
`;

const HeaderTitle = styled.h1`
    color: #c6edff;
    font-family: 'Bagel Fat One', sans-serif;
    font-size: 96px;
    margin: 0;
    text-shadow: -3px -5px #2dbdff, 2px 2px #2dbdff, -5px 5px #2dbdff, 2px -2px #2dbdff;
`;

const HeaderSubtitle = styled.p`
    font-size: 30px;
    color: #333;
    margin: 5px 0;
`;

// Nav 스타일 컴포넌트
const NavBarContainer = styled.div`
    width: 100%; /* 전체 너비 */
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding-top: 10px;
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
    padding-right: 20px; /* 오른쪽 여백 */
`;

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #333;
    font-size: 24px;
    text-decoration: none;

    &:hover {
        color: #2dbdff;
    }

    svg {
        margin-right: 8px;
    }
`;

// 메인 컨텐트 스타일 컴포넌트

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 600px;
    max-height: 80%;
    overflow-y: auto;
`;

const Content = styled.div`
    flex: 1; /* 여유 공간을 차지하여 Footer가 하단에 고정되도록 함 */
    display: grid;
    grid-template-columns: repeat(3, 350px); /* 한 줄에 3개의 아이템 */
    gap: 20px; /* 아이템 간격 */
    justify-items: center; /* 각 아이템 가운데 정렬 */
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto; /* 중앙정렬 */    
    background-color: #ffffff;
`;


const BookCard = styled(Link)`
    width: 300px;
    height: 450px;
    background-color: rgba(130, 186, 244, 0.75);
    border: 1px solid rgba(0,0,0,0.2);
    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
    margin : 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    cursor: pointer;    /* 클릭 가능한 스타일 */
`;

const BookImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.3);
    //margin-bottom : 10px
`;

// Footer 스타일 컴포넌트
const Footer = styled.footer`
    background-color: #2986FE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #F4FAFF;
    padding: 40px 20px;
`;

const FooterTitle = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    margin: 0;
`;

const FooterText = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin-top : 20px;
    text-align: center; 
    line-height: 1.5;
    
`;

const FooterLink = styled.a`
    font-size: 16px;
    color: #F4FAFF;    
    text-decoration: underline;
    margin-top : 20px;
    &:hover {
        color: #2dbdff;
    }
`;

function MainPage() {
    const [books, setBooks] = useState([]);
    // 책 이미지 api
    useEffect(() => {
        axios.get('http://localhost:5000/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <PageContainer>
            <Header>
                <HeaderTitle>모다독</HeaderTitle>
                <HeaderSubtitle>모여서 다같이 독서</HeaderSubtitle>
                <NavBarContainer>
                    <NavBar>
                        <NavLink to="/">
                            <FaArrowLeft /> back to list
                        </NavLink>
                        <NavLink to="/members">
                            <FaUserFriends /> Members
                        </NavLink>
                        <NavLink to="/upload">
                            <FaBookMedical /> Submit your books
                        </NavLink>
                    </NavBar>
                </NavBarContainer>
            </Header>
            <Content>
                {books.map(book =>(
                    <BookCard to={`/book/${book.id}`} key={book.id}>
                        <BookImage src={book.image} alt={book.title}/>
                    </BookCard>
                ))}
            </Content>
            <Footer>
                <FooterTitle>모집 소식</FooterTitle>
                <FooterText>
                    &bull; 현재 예정된 기수가 없습니다.
                    <br/>
                    모집이 진행되면 모다독 홈페이지, okky, 인프런 홍보 사이트를 통해
                    <br/>
                    동시 진행하오니 참고하시기 바랍니다.
                </FooterText>
                <FooterText>
                    &bull; 모다독 관련해서 문의가 있으시다면 아래의 카카오톡 오픈채팅방으로
                    <br/>
                    간단한 자기소개 후 문의주시기 바랍니다.
                </FooterText>
                <FooterLink href="https://open.kakao.com/o/stq3Uttg">
                    카카오톡 채팅방
                </FooterLink>
            </Footer>
        </PageContainer>
    );
}

export default MainPage;
