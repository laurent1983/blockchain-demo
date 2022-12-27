import { Textarea, Input, Button, Grid, Card, Text, Spacer } from "@nextui-org/react"
import React from "react";

export default function Block() {

  const textareaRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const blocknumber = React.useRef(null);
  const nonce = React.useRef(null);
  const card = React.useRef(null);
  var sha256 = require('js-sha256');

  const red = '#ff726f ';
  const green = '#90ee90';

  const onChange = () => {    
    if (textareaRef.current) {
      const hash = sha256(blocknumber.current.value + nonce.current.value + textareaRef.current.value);
      inputRef.current.value = hash;
      if(hash[0] == '0' && hash[1] == '0' && hash[2] == '0' && hash[3] == '0'){
        card.current.style.backgroundColor = green;
      }
      else
      {
        card.current.style.backgroundColor = red;
      }
      console.log(card.current.style.backgroundColor);
    }
  };



  const mine = () => {
    console.log('mine');
    let _nonce = 0;
    let hash = sha256(blocknumber.current.value + _nonce + textareaRef.current.value);

    console.log(hash[0], hash[1], hash[2], hash[3] );

    while (hash[0] != '0' || hash[1] != '0' || hash[2] != '0' || hash[3] != '0') {
      _nonce++;
      hash = sha256(blocknumber.current.value + _nonce + textareaRef.current.value);
    }

    nonce.current.value = _nonce;
    inputRef.current.value = hash;
    card.current.style.backgroundColor = green;
    
  };

  return (
    <>
      <Spacer y={2} />
      <Card ref={card} variant="bordered" css={{ background: red }}
  >
      <Grid.Container justify='center' >
        <Grid justify='center' xs={12}><Text h1>Block</Text></Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>Block Number</Text></Grid>
        <Grid  xs={8}><Input ref={blocknumber} width="32em" initialValue={0} onChange={onChange} /></Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>Nonce</Text></Grid>
        <Grid  xs={8}><Input ref={nonce} width="32em" initialValue={0} onChange={onChange} /></Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>DATA</Text></Grid>
        <Grid  xs={8}><Textarea width='32em'  rows='12'  bordered ref={textareaRef}  onChange={onChange} /></Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>Hash</Text></Grid>
        <Grid  xs={8}><Input ref={inputRef} width="32em" initialValue={sha256('0' + '0' + '')} /></Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'></Grid>
        <Grid  xs={8}><Button auto onPress={mine} > Miner </Button></Grid>
      </Grid.Container>
      </Card>
    </>
  )
}
