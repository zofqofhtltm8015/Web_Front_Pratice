import React, {useState} from 'react';
import {Button} from 'antd';
import Login from './login';
import Register from './Register';


function LR(){
    
const [clicked,setClicked] = useState(false);


const onCliked = () =>{
  setClicked(!clicked);
}
    return(
        <>
        {!clicked &&
        <>
  
          <Register />
          <Button onClick={onCliked
          }>로그인 하기</Button>
        </>
        }
        {clicked && <Login></Login>}
      </>
  
    );
}

export default LR;