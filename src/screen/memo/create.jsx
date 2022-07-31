import { useState } from "react"
import styled from "styled-components"


const Input = styled.input`
    width: 100%; // 가로 100% 사용
`

const Button = styled.button`
    
`

export function Create(props) {
    const [ text, setText ] = useState('')

    const createMemo = () => {
        // 브라우저 자체 저장공간인 localStorage에 입력한 값 저장
        localStorage.setItem('memo', text)

        // 탭을 'view' 이동
        props.setTab('view')        
    }

    return (
        <>
            <Input value={text} onChange={e => setText(e.target.value)} />
            <Button onClick={() => createMemo()}>저장</Button>
        </>
    )
}