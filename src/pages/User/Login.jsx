const Login = () => {
  const REST_API_KEY = 'c0559ae66164d125c5b22c68bc0a2be5';
  const REDIRECT_URI = 'https://kffa9824affd9a.user-app.krampoline.com';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <div style={{
      
    }}>
      <div style={{
        border: "1px solid #000000",
        width: "40%",
        height: "70%",
        position: "absolute",
        left: "50%",
        top: "55%",
        transform: "translate(-50%, -50%)"
      }}>
        <button type='button' onClick={loginHandler} style={{
          width: "50%",
          height: "60px",
          fontSize: "20px",
          borderRadius: "40px",
          border: "0px",
          backgroundColor: "yellow",
          padding: "10px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}>
          카카오로 로그인 하기
        </button>
      </div>
    </div>
  );
};


export default Login