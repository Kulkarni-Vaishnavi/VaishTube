import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display : flex;
  justify-content: space-between;
  flex-wrap : wrap;
`;

export const Home = ({type}) => {

  //fetching videos from backend
  const [videos,setVideos] = useState([]);

  useEffect(()=> {
    const fetchVideos = async ()=> {
      const res = await axios.get(`http://localhost:8800/api/videos/${type}`);
      setVideos(res.data.videos);
    }
    fetchVideos();
  },[type]);//type is arguement -- props

  return (
    <Container>
        {videos.map((singleVideo) => (
          <Card key={singleVideo._id} video={singleVideo} />
        ))}
    </Container>
  );
};