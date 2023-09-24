import HomeAlbum from '../../components/home/HomeAlbum';
import NoneContent from '../../components/layout/NoneContent';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { atomWithStorage } from 'jotai/utils';
import { useSetAtom } from 'jotai';

const fetchGetQuery = () => {
  return axios.get('/api/album');
};

const HomePage = () => {
  const { data: albumData } = useQuery(['album'], fetchGetQuery);

  // 임의의 엑세스 토큰 저장
  const accessTokenAtom = atomWithStorage('ACCESS_TOKEN', '');
  const setAccessToken = useSetAtom(accessTokenAtom);
  setAccessToken('access_token');

  return <>{albumData ? <HomeAlbum data={albumData.data.data || []} /> : <NoneContent contentType="main" />}</>;
};

export default HomePage;
