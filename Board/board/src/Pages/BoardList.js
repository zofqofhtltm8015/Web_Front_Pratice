import React from 'react';
import styled,{css} from 'styled-components';
import * as S from '../Style/Styled';
import {boardList} from '../test.json';
function BoardList(){ 
    


    return(
        <>
            <div class="boardWrap">
                {BoardList.map((Items)=> <S.itemList>
                    <S.item>
                   번호 :  {Items.id}
                    </S.item>

                    <S.item>
                    제목 : {Items.itemName}
                    </S.item>

                </S.itemList> )}              
            </div>
        </>
    );
}

export default BoardList;