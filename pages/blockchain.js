import Block from "../components/Block"
import { Spacer } from "@nextui-org/react"
import React, { useState } from 'react';

export default function Blockchain() {

  const [hashTab, setHashTab] = useState(['000039935cf590b4dc94d0d27dc83dd5cf2a4bc5387604742de11c7348a4aa49', 
                                          '0000c2f358191bfcb52f83d1e4626b5e8a6c26c2e4e672abfd2c8ad0398a9521',
                                          '000078a00aee6ddc266fe4c977f1cf6220a12a3803c12fc03f8590a0342f4598',
                                          '00004c61385d7c2cddce507553fa77d81da5d44eb4c15c59716bc973e2c9ddb9']);

  const updateHash = (index, e) => {
  
    let newArr = [...hashTab];
    newArr[index - 1] = e;   
    setHashTab([...newArr]);
  }

  return (
    <>
      <Spacer y={2} />
      <Block _blocknumber='1' _nonce='109582' _data='laurent est cool !' _previousHash='' updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='2' _nonce='35414' _data='Abonnez-vous à la chaîne !' _previousHash={hashTab[0]} updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='3' _nonce='12466' _data='Pouce vers le haut !' _previousHash={hashTab[1]} updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='4' _nonce='19236' _data='Bitcoin <3' _previousHash={hashTab[2]} updateHash={updateHash} />
      <Spacer y={1} />
      <Block _blocknumber='5' _nonce='23686' _data='Les MNBC sont les ennemies de la liberté' _previousHash={hashTab[3]} updateHash={updateHash} />
      <Spacer y={1} />
    </>
  )
}
