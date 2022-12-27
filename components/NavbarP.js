
import { Navbar, Avatar, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function NavbarP() {
  const router = useRouter();



  return (
    <Navbar isBordered variant={"floating"} >
      <Navbar.Brand>
        <Avatar src="/logo.png" size='lg'  /> <Spacer x={1} /> <Text h1> Coin SU </Text>
      </Navbar.Brand>

      <Navbar.Content >
        <Navbar.Link onClick={() => router.push(`/`)}>
          <Text h1>Hash</Text>
        </Navbar.Link>
        <Navbar.Link onClick={() => router.push(`/block`)}>
          <Text h1>Block</Text>
        </Navbar.Link>
        <Navbar.Link onClick={() => router.push(`/blockchain`)}>
          <Text h1>Blockchain</Text>
        </Navbar.Link>
        <Navbar.Link onClick={() => router.push(`/decentralisation`)}>
          <Text h1>Décentralisation</Text>
        </Navbar.Link>
        <Navbar.Link onClick={() => router.push(`/coin`)}>
          <Text h1>Coin</Text>
        </Navbar.Link>
        <Navbar.Link onClick={() => router.push(`/coinbase`)}>
          <Text h1>Coinbase</Text>
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}