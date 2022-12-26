import { Textarea, Input, Button } from "@nextui-org/react"
import React from "react";
import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";



export default function Home() {

  

  const handleMessageChange = event => {
    // 👇️ update textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const textareaRef = React.useRef(null);
  const inputRef = React.useRef(null);
  var sha256 = require('js-sha256');


  const onChange = () => {
    if (textareaRef.current) {
      inputRef.current.value = sha256(textareaRef.current.value);;
    }
  };

  return (
    <>
     
      <Card>
        <Card.Body>
        <Row justify="center" align="center">
          <Text  h1> HASH SHA256</Text>
          </Row>
          <Row justify="center" align="center">
          <Textarea width='520px'  rows='12'  bordered ref={textareaRef}  onChange={onChange} />
          </Row>
          <Spacer y={1} />
          <Row justify="center" align="center">
          <Input ref={inputRef} width="520px"  />
          </Row>
        </Card.Body>
      </Card>
    
        
      
        
      
      
    </>
  )
}
