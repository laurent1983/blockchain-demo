import Blockchain from "../components/Blockchain"
import { Container, Spacer, Text, Row } from "@nextui-org/react"

export default function BlockchainPage() {


  return (
    <>
      <Container justify="center" display='flex'>
        <Spacer y={2} />
        <Row>
          <Text h1>Blockchain</Text>
        </Row>
        <Spacer y={2} />
        <Row>
          <Blockchain />
        </Row>
      </Container>
    </>
  )
}
