import NoneContent from "../../components/layout/NoneContent";
import { useState } from "react";

const HomePage = () => {
  const [data, setData] = useState(null);

  return (
    <>
      {!data ? <NoneContent contentType="main" /> : <div></div>}
    </>
  );
};

export default HomePage;
