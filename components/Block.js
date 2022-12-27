import { Textarea, Input, Button, Grid, Card, Text, Spacer } from "@nextui-org/react"
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
      <Card ref={card} variant="bordered" css={{ background: initColor }}
  >
      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>Block Number</Text></Grid>
        <Grid  xs={8}><Input ref={blocknumber} width="32em" initialValue={_blocknumber} onChange={onChange} /></Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>Nonce</Text></Grid>
        <Grid  xs={8}><Input ref={nonce} width="32em" initialValue={_nonce} onChange={onChange} /></Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>DATA</Text></Grid>
        <Grid  xs={8}><Textarea width='32em'  rows='4' initialValue={_data}  bordered ref={textareaRef}  onChange={onChange} /></Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>Prev</Text></Grid>
        <Grid  xs={8}><Input width="32em" value={previousHash} /></Grid>
      </Grid.Container>
      
      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>Hash</Text></Grid>
        <Grid  xs={8}><Input ref={inputRef} width="32em" initialValue={initHash} /></Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'></Grid>
        <Grid  xs={8}><Button auto onPress={mine} > Miner </Button></Grid>
      </Grid.Container>
      </Card>
    </>
  )
}
