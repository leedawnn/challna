import HomeAlbum from "../../components/home/HomeAlbum";
import NoneContent from "../../components/layout/NoneContent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchGetQuery = () => {
  return axios.get('/api/album');
}

const HomePage = () => {
  const { data } = useQuery(['album'], fetchGetQuery);

  return (
    <>
      {data ? <HomeAlbum /> : <NoneContent contentType="main" />}
    </>
  );
};

export default HomePage;
