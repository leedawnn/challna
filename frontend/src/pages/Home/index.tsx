import HomeAlbum from "../../components/home/HomeAlbum";
import NoneContent from "../../components/layout/NoneContent";
import { useState } from "react";

const HomePage = () => {
  const [data, setData] = useState(null);

  return (
    <>
      {data ? <NoneContent contentType="main" /> : <HomeAlbum />}
    </>
  );
};

export default HomePage;
