import Block from "./Block"
import { Spacer } from "@nextui-org/react"
import React, { useState } from 'react';

export default function Blockchain3() {

  const [hashTab, setHashTab] = useState(['0000df8a04e025f7827ce1b9dfbbaf132a03959ce9a41b8bd77d435034098020', 
                                          '0000bda0a93231619eb7e8747d3c55fac0b17bf5d9db190d666c41db43d6e63b',
                                          '00005dd739dc638ff56245e9dae58cefb87b926763d909a9ca841050d038a79e',
                                          '00009086eca27fce89cd7c20785f3c321741df9f15d3c89759918d444b4c01ce']);

  const updateHash = (index, e) => {
  
    let newArr = [...hashTab];
    newArr[index - 1] = e;   
    setHashTab([...newArr]);
  }

  return (
    <>
      <Block _blocknumber='1' _nonce='103975' 
      _data={'100=>laurent'}
      _previousHash='' updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='2' _nonce='7645' 
      _data={'100=>laurent\n83:Laurent=>marie\n10:Laurent=>julie\n7:Laurent=>marc'}
       _previousHash={hashTab[0]} updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='3' _nonce='3656' 
      _data={'100=>laurent\n55:marie=>jean\n8:julie=>mathieu\n55:marc=>paul'}
       _previousHash={hashTab[1]} updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='4' _nonce='996' 
      _data={'100=>laurent\n88:laurent=>agnes\n12:paul=>marcel\n7:jean=>joe'}
       _previousHash={hashTab[2]} updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='5' _nonce='47301' 
      _data={'100=>laurent\n63:laurent=>thomas\n8:agnes=>veronique\n6:joe=>gaston'}
       _previousHash={hashTab[3]} updateHash={updateHash} />
      <Spacer y={1} />
    </>
  )
}
