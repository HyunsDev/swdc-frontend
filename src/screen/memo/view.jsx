import { useEffect, useState } from "react"

// 메모를 표시하는 컴포넌트
export function View(props) {
    const [ memo, setMemo ] = useState('')
    
    useEffect(() => {
        // 브라우저 저장공간인 localStorage에서 memo 가져오기
        const item = localStorage.getItem('memo')
        setMemo(item)
    }, [setMemo])

    return (
        <>
            {
                memo
            }
        </>
    )
}