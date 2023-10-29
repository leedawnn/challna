import { useLocation } from 'react-router-dom';

const MessageDetail = () => {
  const location = useLocation();
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
    </div>
  );
};

export default MessageDetail;
