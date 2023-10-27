import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '../../constants/routes';
import { message, boardImageViewDtoList } from '../../types/message';

type Props = {
  contentList: message[];
  boardImageViewDtoList: boardImageViewDtoList[];
};
const MessageDetail = ({ contentList }: Props) => {
  return (
    <div>
      {contentList?.map((contentList) => {
        return (
          <div key={contentList.board_id}>
            <Link to={ROUTES_PATH.messageDetail}>
              <div>
                {contentList.boardImageViewDtoList?.map((boardImageViewDtoList: any) => {
                  return (
                    <div key={boardImageViewDtoList.imageId}>
                      <li>{boardImageViewDtoList.imageId}</li>
                      <img
                        src={boardImageViewDtoList.accessUrl}
                        alt={boardImageViewDtoList.originName}
                        style={{ width: '300px', height: '200px' }}
                      />
                      <li>{boardImageViewDtoList.resizeUrl}</li>
                    </div>
                  );
                })}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MessageDetail;
