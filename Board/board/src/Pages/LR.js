import React, {useState} from 'react';
import {Button} from 'antd';
import Login from '../Components/login';
import Register from '../Components/Register';
import BoardList from './BoardList';


function LR(){
    
const [clicked,setClicked] = useState(false);

const [isLoggined, setIsLoggined] = useState(false);


const onCliked = () =>{
  setClicked(!clicked);
}
const SuccessRegister = ()=>{
  setClicked(true);
}
const SuccessLogin =()=>{
  setIsLoggined(true);
}
const ClickedAdmin=()=>{
  setIsLoggined(true);
  setClicked(true);
}
    return(
        <>
        
        {!isLoggined&& !clicked &&
        <>
  
          <Register Success={SuccessRegister} />
          <Button onClick={onCliked
          }>로그인 하기</Button>
          <Button type="primary" onClick={ClickedAdmin}>개발자 버튼</Button>
        </>
        }
        {!isLoggined &&clicked && <Login Success={SuccessLogin}></Login>}
        {isLoggined && <BoardList></BoardList>}
      </>
  
    );
}

export default LR;