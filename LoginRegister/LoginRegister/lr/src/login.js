import React,{useState,useCallback, useEffect} from 'react';
import axios from 'axios';
import {Input, Button} from 'antd'


function App() {

  const [id,setId] = useState('');
  const [pw,setPw] = useState('');


  useEffect(()=>{
    console.log(localStorage.getItem("token"));
  })

  const onChange  = (e) => {
    const {name,value} = e.target;
    switch(name){

      case "ID":
        return(
          setId(value)

        )

      case "PW":
        return(
          setPw(value)
        )
      
      default:
        throw new Error("It works on my machine");
          

    }
  }

  function Login(){
    axios({
      method: 'POST',
      url: 'http://10.156.145.107:8080/auth',
      data: {
        "email": id,
        "password": pw
      }
    }).then((res)=>{
      console.log(res);
      console.log(`token : ${res.data.accessToken}`);
      localStorage.setItem("token",res.data.accessToken);

      console.log(localStorage.getItem("token"));
    }).catch((res)=>{
      console.log(res);
    })
    
  }

  const Id_Pw_Form = {margin:"30px", width: "300px" };
  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        <Input name="ID" placeholder="IDa" value={id} style={Id_Pw_Form} onChange={onChange}></Input>
        <Input name="PW" placeholder="Password"  value={pw}style={Id_Pw_Form} onChange={onChange}></Input>

        <Button type="primary" onClick={Login} style={{width: "100px",textAlign:"center"}}>등록</Button>
    </div>
  );
}

export default App;



import java.util.*;

public class TreeSetExample3 {

	public static void main(String[] args) {
		TreeSet<String> scores = new TreeSet<>();
		scores.add(new Integer(87));
		scores.add(new Integer(98));
		scores.add(new Integer(75));
		scores.add(new Integer(95));
		scores.add(new Integer(89));

	}

}
