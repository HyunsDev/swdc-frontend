import { useEffect, useState } from "react"
import styled from "styled-components"


const Input = styled.input`
    // 가로 100% 사용
    width: 100%;
`

const Button = styled.button`
    
`

export function Edit(props) {
    const [ text, setText ] = useState('')


    // 처음에 딱 한번만 실행
    useEffect(() => {
         // 브라우저 저장공간에서 'memo'의 값 가져오기
        const prevMemo = localStorage.getItem('memo')

         // input의 값을 이전 메모의 값으로 변경
        setText(prevMemo)
    }, [])

    const createMemo = () => {
        // 브라우저 자체 저장공간인 localStorage에 입력한 값 저장
        localStorage.setItem('memo', text)

        // 탭을 'view'로 변경
        props.setTab('view')
    }

    return (
        <>
            <Input value={text} onChange={e => setText(e.target.value)} />
            <Button onClick={() => createMemo()}>저장</Button>
        </>
    )
}