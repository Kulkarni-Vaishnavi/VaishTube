import React from 'react'
import styled from 'styled-components'
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "300px"};
    margin-bottom : ${(props)=>props.type === "sm"? "10px": "45px"};
    cursor : pointer;
    display : ${(props)=>props.type === "sm" &&"flex"};

`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`

`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
export const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{ textDecoration : "none"}}>
    <Container type={type}>
    <Image type={type} src="https://imgs.search.brave.com/Zmwpna_dJHYvq2dyR9ZcL1u9HN543ZJl8x_RPMGRms4/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/b2VKR3ozZWV5aHhL/M1hSUTBMeHBRSGFG/aiZwaWQ9QXBp"/>
        <Details type={type} >
            <ChannelImage type={type} src="https://imgs.search.brave.com/XcwXat5h5XqWxUwbawesLBl9z0_l552CqjzSAw4Hzmw/rs:fit:520:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/ZDdUUUk2N3B3ZnIw/RjVqcVRnRDFBQUFB/QSZwaWQ9QXBp"/>
            <Texts>
            <Title>Test Video</Title>
            <ChannelName>Vaish Vlog's</ChannelName>
            <Info>660,998 views <CircleIcon sx={{fontSize: 6 }} /> 1 day ago</Info>
        </Texts>
        </Details>
    </Container>
    </Link>
  )
}

