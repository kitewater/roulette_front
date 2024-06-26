import { Link } from "react-router-dom";
import PostLayout from "../../components/PostLayout/PostLayout";
import axios from "axios";
import { useEffect, useState } from "react";

const BoardMain = () => {
  // 게시글 목록을 저장할 상태
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 게시글 데이터를 불러오는 함수
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://example.com/api/posts'); // API URL 수정 필요
        setPosts(response.data); // 응답 데이터를 상태에 저장
      } catch (error) {
        console.error('게시글을 불러오는 중 오류가 발생했습니다', error);
      }
    };

    fetchPosts(); // 컴포넌트 마운트 시 데이터 불러오기
  }, []); // 의존성 배열이 비어있으므로 컴포넌트가 처음 마운트될 때만 실행됩니다.

  return (
    <div>
      <h1>게시판</h1>
      <div className="BoardMain-container" style={{width: '100%', borderTop: '1px solid #ffe6e6' }}>
        <div className="questionBtn-container" style={{display: "flex", flexDirection:"row-reverse"}}>
          <Link to="/code/ask" style={{
            backgroundColor:"#ff9e9e",
            margin:"5px",
            padding:"5px 10px", 
            border:"1px solid black",
            color: "black", 
            textDecoration: "none"}}> 질문하기 </Link>
        </div>
        <div className="PostList-container">
          {/* 게시글 목록을 PostLayout 컴포넌트에 전달 */}
          <PostLayout posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default BoardMain;