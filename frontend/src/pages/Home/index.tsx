import HomeAlbum from '../../components/home/HomeAlbum';
import NoneContent from '../../components/layout/NoneContent';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchGetQuery = () => {
  return axios.get('/api/album');
};

const HomePage = () => {
  const { data: albumData } = useQuery(['album'], fetchGetQuery);

  console.log('accessToken: ', localStorage.getItem('ACCESS_TOKEN'));

  return <>{albumData ? <HomeAlbum data={albumData.data.data || []} /> : <NoneContent contentType="main" />}</>;
};

export default HomePage;
