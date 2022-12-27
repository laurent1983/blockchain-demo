import Block from "./Block"
import { Spacer } from "@nextui-org/react"
import React, { useState } from 'react';

export default function Blockchain2() {

  const [hashTab, setHashTab] = useState(['0000273be2cba9a4a1fb477285251151284b1e3ff234af4d4194d1f1cf091e52', 
                                          '0000ea04027c0b4aa80bacd7dc05c8ef4582c3ec1d1e9c84c89f89f472fd33e2',
                                          '000026c1d72a9b61147006cce62655dee92edb238d8c7c4d0d7b172e9db03356',
                                          '0000ab72218afdbf298085e3bdca92b3f426bd5860940ee5bbb7dff02dfc41a0']);

  const updateHash = (index, e) => {
  
    let newArr = [...hashTab];
    newArr[index - 1] = e;   
    setHashTab([...newArr]);
  }

  return (
    <>
      <Block _blocknumber='1' _nonce='34549' 
      _data={'100:laurent=>bob\n25:laurent=>alice\n32:paul=>joe'}
      _previousHash='' updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='2' _nonce='51662' 
      _data={'9:noel=>Laurent\n77:julie=>marie\n57:pierre=>luc'}
       _previousHash={hashTab[0]} updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='3' _nonce='37305' 
      _data={'78:alice=>jean\n2:marie=>mathieu\n55:paul=>marc'}
       _previousHash={hashTab[1]} updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='4' _nonce='39643' 
      _data={'88:vincent=>agnes\n12:alix=>marcel\n7:paul=>joe'}
       _previousHash={hashTab[2]} updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='5' _nonce='27087' 
      _data={'63:thomas=>marcelle \n8:blaise=>veronique\n6:gaston=>arnaud'}
       _previousHash={hashTab[3]} updateHash={updateHash} />
      <Spacer y={1} />
    </>
  )
}
