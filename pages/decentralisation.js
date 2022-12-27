import Blockchain from "../components/Blockchain"
import { Container, Spacer, Text, Row } from "@nextui-org/react"

export default function DecentralisationPage() {


  return (
    <>
     <Spacer y={2} />
     <Text h1>Décentralisation</Text>
      <Container justify="center" display='flex'>
        <Row>
          <Text h1>Noeud A</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain />
        </Row>
      </Container>
      <Container justify="center" display='flex'>
        <Spacer y={2} />
        <Row>
          <Text h1>Noeud B</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain />
        </Row>
      </Container>
      <Container justify="center" display='flex'>
        <Spacer y={2} />
        <Row>
          <Text h1>Noeud C</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain />
        </Row>
      </Container>
      <Container justify="center" display='flex'>
        <Spacer y={2} />
        <Row>
          <Text h1>Noeud D</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain />
        </Row>
      </Container>
      <Container justify="center" display='flex'>
        <Spacer y={2} />
        <Row>
          <Text h1>Noeud E</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain />
        </Row>
      </Container>
    </>
  )
}
