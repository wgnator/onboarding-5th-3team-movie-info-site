import { Link } from "react-router-dom";

function NotFound() {
  return (
    <p>
      페이지를 찾을 수 없습니다. <Link to={"/"}>돌아가기</Link>
    </p>
  );
}

export default NotFound;
