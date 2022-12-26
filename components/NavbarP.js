
import { Navbar } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function NavbarP() {
  const router = useRouter();



  return (
    <Navbar isBordered variant={"floating"} >
      <Navbar.Brand>
       COIN SU
      </Navbar.Brand>

      <Navbar.Content >
        <Navbar.Link onClick={() => router.push(`/`)}>
          HASH
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}