import { Textarea, Input, Button, Container, Card, Text, Row, Col, Spacer } from "@nextui-org/react"
import React from "react";
import { useEffect, useState } from 'react';

export default function Block({_blocknumber, _nonce, _data, _previousHash, updateHash}) {

  const textareaRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const blocknumber = React.useRef(null);
  const nonce = React.useRef(null);
  const card = React.useRef(null);
  var sha256 = require('js-sha256');
  const [previousHash, setPreviousHash] = useState(_previousHash);

  const red = '#ff726f ';
  const green = '#90ee90';

  useEffect(() => { setPreviousHash(_previousHash) }, [_previousHash]);
  useEffect(() => { onChange() }, [previousHash]);

  const onChange = () => {    
    if (textareaRef.current) {
      const hash = sha256(blocknumber.current.value + nonce.current.value + textareaRef.current.value + previousHash);
      inputRef.current.value = hash;
      if(hash[0] == '0' && hash[1] == '0' && hash[2] == '0' && hash[3] == '0'){
        card.current.style.backgroundColor = green;
      }
      else
      {
        card.current.style.backgroundColor = red;
      }
      updateHash(blocknumber.current.value, hash);
      console.log('onChange', _blocknumber);
    }
  };

  const mine = () => {
    let searchNonce = 0;
    let hash = sha256(blocknumber.current.value + searchNonce + textareaRef.current.value + previousHash);

    while (hash[0] != '0' || hash[1] != '0' || hash[2] != '0' || hash[3] != '0') {
      searchNonce++;
      hash = sha256(blocknumber.current.value + searchNonce + textareaRef.current.value + previousHash);
    }

    nonce.current.value = searchNonce;
    inputRef.current.value = hash;
    card.current.style.backgroundColor = green;
    updateHash(blocknumber.current.value, hash);
    
  };

  const initHash = sha256(_blocknumber + _nonce + _data + previousHash);
  let initColor = red;
  if(initHash[0] == '0' && initHash[1] == '0' && initHash[2] == '0' && initHash[3] == '0') {
    initColor = green;
  }

  return (
    <>
      <Card ref={card} variant="bordered" css={{ background: initColor, width: '900px', minWidth: '900px' }}>
        <Spacer y={1} />
      <Container css={{ width: '800px', minwidth: '800px' }} >
       <Row key="1">
        <Col><Text h3>Block Number</Text></Col><Col><Input ref={blocknumber} width="32em" initialValue={_blocknumber} onChange={onChange} /></Col>
       </Row>
       <Row key="2">
        <Col><Text h3>Nonce</Text></Col><Col><Input ref={nonce} width="32em" initialValue={_nonce} onChange={onChange} /></Col>
       </Row>
       <Row key="3">
        <Col><Text h3>DATA</Text></Col><Col><Textarea width='32em'  rows='4' initialValue={_data}  bordered ref={textareaRef}  onChange={onChange} /></Col>
       </Row>
       <Spacer y={1} />
       <Row key="4">
        <Col><Text h3>Prev</Text></Col><Col><Input width="32em" value={previousHash} /></Col>
       </Row>
       <Row key="5">
        <Col><Text h3>Hash</Text></Col><Col><Input ref={inputRef} width="32em" initialValue={initHash} /></Col>
       </Row>
       <Row key="6">
        <Col></Col><Col><Button auto onPress={mine} > Miner </Button></Col>
       </Row>
      </Container>
      <Spacer y={1} />
      </Card>
    </>
  )
}
