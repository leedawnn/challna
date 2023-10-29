import { useLocation } from 'react-router-dom';

const MessageDetail = () => {
  const location = useLocation();
  // const { boardId } = useParams() as any;
  // const data = (accesstoken: string) => useMessageDetail(boardId, accesstoken);
  const ImageItem = location.state.boardImageViewDtoList;
  return (
    <div>
      <div>{location.state.board_id}</div>
      <div>{location.state.content}</div>
      <div>{location.state.dateTime}</div>
      <div>
        {ImageItem?.map((List: any) => {
          return (
            <div key={List.ImageId}>
              <img src={List.accessUrl} alt={List.originName} style={{ width: '500px', height: '375px' }} />
            </div>
          );
        })}
      </div>
      {/* {contentList?.map((contentList: any) => {


        console.log(contentList.boardImageViewDtoList[2]);
        if (id == contentList.board_id) {
          return (
            <div>
              <li>{contentList.board_id}</li>
              {contentList.boardImageViewDtoList?.map((List: any, Index: any) => {
                return (
                  <div key={contentList.board_id}>
                    <img src={List.accessUrl} alt={List.originName} style={{ width: '300px', height: '200px' }} />
                  </div>
                );
              })}
            </div>
          );
        } */}

      {/* // return (
        //   <div key={id}>
        //     {contentList.boardImageViewDtoList?.map((List: any, Index: any) => {
        //       return (
        //         <div key={contentList.board_id}>
        //           <img src={List.accessUrl} alt={List.originName} style={{ width: '300px', height: '200px' }} />
        //         </div>
        //       );
        //     })}
        //   </div>
        // ); */}
      {/* })} */}
    </div>
  );
};

export default MessageDetail;
