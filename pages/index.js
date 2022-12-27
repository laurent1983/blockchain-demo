import { Textarea, Input, Grid } from "@nextui-org/react"
import React from "react";
import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";



export default function Home() {

  const textareaRef = React.useRef(null);
  const inputRef = React.useRef(null);
  var sha256 = require('js-sha256');

  const onChange = () => {
    if (textareaRef.current) {
      inputRef.current.value = sha256(textareaRef.current.value);
    }
  };

  return (
    <>
      <Grid.Container justify='center' >
        <Grid justify='center' xs={12}><Text h1>HASH SHA256</Text></Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid  xs={4}></Grid><Grid  xs={8}><Textarea width='32em'  rows='12'  bordered ref={textareaRef}  onChange={onChange} /></Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>Hash</Text></Grid>
        <Grid  xs={8}><Input ref={inputRef} width="32em" initialValue={sha256('')} /></Grid>
      </Grid.Container>
    </>
  )
}
