import { Textarea, Input, Grid, Button } from "@nextui-org/react"
import React from "react";
import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";
import Wallet from "../components/wallet";




export default function Signature() {

  
  const signatureRef = React.useRef(null);
  const clefPriveRef = React.useRef(null);
  const messageRef = React.useRef(null);
  
  const messageVerifRef = React.useRef(null);
  const signatureVerifRef = React.useRef(null);
  const clePulicVerifRef = React.useRef(null);

  const card = React.useRef(null);
  

  const sha256 = require('js-sha256');
  const elliptic = require('elliptic');
  const ec = new elliptic.ec('secp256k1');  

  const red = '#ff726f ';
  const green = '#90ee90';

  const onChangeMessage = () => {

    let pk = clefPriveRef.current.value;
    if(pk === '') return;
    
    let keyPair = ec.keyFromPrivate(pk);

    let msgHash = sha256(messageRef.current.value) 
    var signature = keyPair.sign(msgHash);
    let derSign = signature.toDER("hex");
    signatureRef.current.value = derSign;
  };

  const onChangeVerif = () => {

    
    try {

      let key = ec.keyFromPublic(clePulicVerifRef.current.value, 'hex');

      let verify = key.verify(sha256(messageVerifRef.current.value), signatureVerifRef.current.value);
      console.log('verify', verify);

      card.current.style.backgroundColor = verify ? green : red;


    } catch (error) {
      console.error(error);
    }

    console.log('pub', clePulicVerifRef.current.value);
    console.log('msgHash', sha256(messageVerifRef.current.value));
    console.log('derSign', signatureVerifRef.current.value);
    
  };

  /*

  let keyPair = ec.keyFromPrivate(sha256('a'));

  let privKey = keyPair.getPrivate("hex");
  let pubKey = keyPair.getPublic();
  
  let msgHash = sha256('b') 
  var signature = keyPair.sign(msgHash);
  let derSign = signature.toDER("hex");
  console.log("Signature :", derSign);


  var pub = pubKey.encode("hex");
  var key = ec.keyFromPublic(pub, 'hex');

  console.log('verify', key.verify(msgHash, derSign));

  console.log('pub', pub);
  console.log('msgHash', msgHash);
  console.log('derSign', derSign);
*/

  

  
  

  return (
    <>
      <Grid.Container justify='center' >
        <Grid justify='center' xs={12}><Text h1>Signature Numérique</Text></Grid>
      </Grid.Container>

      <Wallet name={''} />
      

      <Grid.Container justify='center' >
        <Grid justify='center' xs={12}><Text h1>Signature</Text></Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Grid xs={4} justify='flex-end'><Text h3>Message</Text></Grid><Grid  xs={8}>
          <Textarea width='32em'  rows='4'  bordered initialValue="Prouve-le-moi si tu l'oses !"  ref={messageRef} onChange={onChangeMessage } /></Grid>      
          <Grid xs={4} justify='flex-end'><Text h3>Clef privée (Mot de passe)</Text></Grid><Grid  xs={8}><Input ref={clefPriveRef} width="32em" onChange={onChangeMessage } /></Grid>    
          <Grid xs={4} justify='flex-end'><Text h3>signature</Text></Grid><Grid  xs={8}><Textarea ref={signatureRef} width="32em" onChange={onChangeMessage } /></Grid>      
      </Grid.Container>


      <Card ref={card} shadow css={{ background: red}} >
      <Grid.Container justify='center' >
        <Grid justify='center' xs={12}><Text h1>Verification</Text></Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
          <Grid xs={4} justify='flex-end'><Text h3>Message</Text></Grid><Grid  xs={8}><Textarea width='32em'  rows='4'  bordered initialValue="Prouve-le-moi si tu l'oses !"  ref={messageVerifRef} onChange={onChangeVerif } /></Grid>      
          <Grid xs={4} justify='flex-end'><Text h3>Clef publique (Adresse)</Text></Grid><Grid  xs={8}><Textarea ref={clePulicVerifRef} width="32em" onChange={onChangeVerif } /></Grid>
          <Grid xs={4} justify='flex-end'><Text h3>signature</Text></Grid><Grid  xs={8}><Textarea ref={signatureVerifRef} width="32em" onChange={onChangeVerif } /></Grid>      
      </Grid.Container>
      </Card>

      

    </>
  )
}
