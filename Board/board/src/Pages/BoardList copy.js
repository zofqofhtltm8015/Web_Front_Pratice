import React,{useEffect,useState} from 'react';
import styled,{css} from 'styled-components';
import * as S from '../Style/Styled';
import axios from 'axios';

function BoardList(){ 

    
    const [boardList, setBoardList] = useState(null);

    const test = async () => {
        const List = await axios.get('http://10.156.145.107:8080/board/list');
        console.log(List.data);
        // setBoardList(List);
        
    };

    useEffect(()=>{
        test();
    },[])
    


    return(
        <>
            <div class="boardWrap">
                {boardList}
                {/* {boardList && boardList.map((Items)=> <S.itemList>
                    <S.item>
                   번호 :  {Items.id}
                    </S.item>

                    <S.item>
                    제목 : {Items.title}
                    </S.item>

                </S.itemList> )}               */}
            </div>
        </>
    );
}

export default BoardList;