import Blockchain3 from "../components/Blockchain3"
import { Container, Spacer, Text, Row } from "@nextui-org/react"

export default function CoinPage() {


  return (
    <>
     <Spacer y={2} />
     <Text h1>Coinbase</Text>
      <Container justify="center" display='flex'>
        <Row>
          <Text h1>Noeud A</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain3 />
        </Row>
      </Container>
      <Container justify="center" display='flex'>
        <Spacer y={2} />
        <Row>
          <Text h1>Noeud B</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain3 />
        </Row>
      </Container>
      <Container justify="center" display='flex'>
        <Spacer y={2} />
        <Row>
          <Text h1>Noeud C</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain3 />
        </Row>
      </Container>
      <Container justify="center" display='flex'>
        <Spacer y={2} />
        <Row>
          <Text h1>Noeud D</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain3 />
        </Row>
      </Container>
      <Container justify="center" display='flex'>
        <Spacer y={2} />
        <Row>
          <Text h1>Noeud E</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain3 />
        </Row>
      </Container>
    </>
  )
}
