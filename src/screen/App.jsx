import { useState } from "react";
import styled from "styled-components";
import { Create } from "./memo/create";
import { Edit } from "./memo/edit";
import { View } from "./memo/view";

// 화면 전체를 감싸는 요소
const Divver = styled.div`
  /* 크기를 화면 전체로 설정 */
  width: 100vw;
  height: 100vh;
  
  /* 하위 태그를 가운데 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* 배경색상 */
  background-color: #07081d;
`


// 앱 박스 요소
const AppBox = styled.div`
  /* 패딩 */
  padding: 20px;

  /* 배경색상 */
  background-color: #ffffff;

  /* 테두리 */
  border: solid 1px #16c7bd;
  border-radius: 8px;

  /* 글자 색 */
  color: #000000;
`

// 제목 요소
const Title = styled.h1`
  
`

// 버튼s 요소
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

// 버튼
const Button = styled.button`
  
`

function App() {
  const [ tab, setTab ] = useState('view')

  return (
    <Divver>
      <AppBox>
        <Title>한 줄 메모장 {tab}</Title>
        <Buttons>
          <Button onClick={() => setTab('view')}>보기</Button>
          <Button onClick={() => setTab('create')}>작성</Button>
          <Button onClick={() => setTab('edit')}>수정</Button>
        </Buttons>
        { tab === 'view' && <View /> }
        { tab === 'create' && <Create setTab={setTab} /> }
        { tab === 'edit' && <Edit setTab={setTab} /> }
      </AppBox>
    </Divver>
  );
}

export default App;
