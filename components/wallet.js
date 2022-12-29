import { Textarea, Input, Grid, Container, Card, Text, Row, Col, Spacer } from "@nextui-org/react"
import React from "react";
import { useEffect, useState } from 'react';

export default function Wallet({name}) {

  const [graine, setGraine] = useState('');
  const clefPriveRef = React.useRef(null);
  const clePulicRef = React.useRef(null);

  var sha256 = require('js-sha256');
  let elliptic = require('elliptic');
    let ec = new elliptic.ec('secp256k1');

  useEffect(() => { 
    let hash = sha256(graine); 

    let keyPair = ec.keyFromPrivate(hash);
    let privKey = keyPair.getPrivate("hex");

    //let pubKey = keyPair.getPublic().encode("hex");
    // compression pubKey
    let pubKeycomp = keyPair.getPublic().encodeCompressed("hex");    
    let pubKey = pubKeycomp;

    
    
    // decompression pubKey
    /*
    let key2 = ec.keyFromPublic(pubKeycomp, 'hex');
    console.log('pubKeydecomp', key2.getPublic().encode("hex"));
    */

    clefPriveRef.current.value = privKey;
    clePulicRef.current.value = pubKey;
  
  }, [graine]);

  return (
    <>
    <Grid.Container gap={2}>
        <Grid  xs={4}></Grid><Grid justify='left' xs={8}><Text h1>{name}</Text></Grid>        
        <Grid xs={4} justify='flex-end'><Text h3>Graine</Text></Grid><Grid  xs={8}><Textarea width='32em'  rows='4'  bordered value={graine} onChange={e => setGraine(e.target.value)} /></Grid>        
        <Grid xs={4} justify='flex-end'><Text h3>Clef privée (Mot de passe)</Text></Grid><Grid  xs={8}><Input ref={clefPriveRef} width="32em" initialValue={sha256('')} /></Grid>    
        <Grid xs={4} justify='flex-end'><Text h3>Clef publique (Adresse)</Text></Grid><Grid  xs={8}><Textarea ref={clePulicRef} width="32em" initialValue={sha256('')} /></Grid>    
      </Grid.Container>
    </>
  )
}
