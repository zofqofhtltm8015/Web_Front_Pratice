import React,{useState} from 'react';

import {Input} from 'antd';

import axios from 'axios';

function Reg({Success}){


    const [name,setName] = useState('');

    const [id,setId] = useState('');

    const [pw,setPw] = useState('');

    const [checkPw,setCheckPw] = useState('');



    const [email, setEmail] = useState('');


    

    console.log(`name : ${name} email : ${email} id :  ${id} pw : ${pw} checkPw : ${checkPw}`)
    function onChange(e){


        
        const type = e.target.name
        switch(type){ 
            case 'name':
                
            setName(e.target.value);
            break;

            case 'email':
                
            setEmail(e.target.value);
            break;

            case 'id':
                 
            setId(e.target.value);
            break;

            case 'pw':
                
            setPw(e.target.value);
            break;
            
            case 'checkPw':
                
            setCheckPw(e.target.value);
            break;

            default:
                return 1;

        }

    }


    function Register(e){

        e.preventDefault()

        if(pw !== checkPw){
            return alert("패스워드가 같지 않습니다.")
        }

        else if(pw === '' || id === ''){
            return alert("패스워드가 없습니다.")
        }


        const user ={
            userName: name,
            userEmail: email,
            userId: id,
            userPassword: pw
        
   
       }
        console.log(1)
        axios({
            method: "POST",
            url: 'http://10.156.145.107:8080/user/signup',
            data: {
                name,
                 email,
            //    userId: id,
                password: pw
           }
        }).then((res) => {
                alert("로그인 완료!");
                Success();
        }).catch((res) => {
            console.log(res);
        })
        // axios.post('http://10.156.145.107:8080/join',user).then(
        //     function(res){
        //         alert("로그인 성공");
        //         console.log(res)

        //     }
        // ).catch(function(error){alert("로그인 실패"); console.log(error)})
    

        
    }
    
    

   const  InputStyle={
        margin: "30px",
        width: "300px"
    }

    const DivFlexStlye={
        display: "flex",
        flexDirection: "column",

        position: "absolute",
    
        top: "10%",
        left: "40%"

    }
    return( 
    <form action="#"> 
        <div style={DivFlexStlye}>
                <Input 


                    style={InputStyle}

                    name="name"

                    placeholder="이름" 

                    onChange={onChange}
                    
                    />

                    

                <Input


                    style={InputStyle}

                    type="email"

                    name="email"
                
                    placeholder="이메일" 
                
                    onChange={onChange}
                
                />

                <Input
                
                    style={InputStyle}

                    name="id"

                    placeholder="아이디" 

                    onChange={onChange}

                />

                <Input
                       style={InputStyle}

                     
   
                       name="pw"
   
                       placeholder="패스워드" 
   
                       onChange={onChange}
                
                />

            <Input

                       style={InputStyle}
            
                       name="checkPw"
   
                       placeholder="패스워드 확인" 
   
                       onChange={onChange}
                
                />

                <div style={{color: "red"}}>{pw !== checkPw && "비밀번호가 올바르지 않습니다."}</div>


            <button class="Reg" onClick={Register}>회원가입하기</button>

        </div>

    </form>
    )

}

export default Reg;