import HomeAlbum from '../../components/home/HomeAlbum';
import NoneContent from '../../components/layout/NoneContent';
import instance from '../../api/axios';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { userStore } from '../../stores/userStore';

const fetchGetQuery = (accessToken: string) => () => {
  return instance({
    url: '/album/imageview',
    method: 'get',
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};

const HomePage = () => {
  const users = useAtomValue(userStore);
  const { data: albumData } = useQuery(['album'], fetchGetQuery(users?.accessToken as string));

  return <>{albumData ? <HomeAlbum data={albumData.data || []} /> : <NoneContent contentType="main" />}</>;
};

export default HomePage;
