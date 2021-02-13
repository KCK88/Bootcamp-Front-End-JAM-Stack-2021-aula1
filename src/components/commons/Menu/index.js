import React from "react"
import { Logo } from "../../../theme/Logo"
import { Text } from "../../foundation/Text"
import { Button } from "../Button"
import { MenuWrapper } from "./styles/MenuWrapper"

export default function Menu() {
  const links = [
    {
      texto: "Home",
      url: "/",
    },
    {
      texto: "FAQ",
      url: "/faq",
    },
    {
      texto: "Sobre",
      url: "/sobre",
    },
  ]
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>      
      <MenuWrapper.CentralSide>
        {links.map((link) => {
          return (
            <li key={link.url}>
              <Text variant="smallestException" tag="a" href={link.url}>
                {link.texto}
              </Text>
            </li>
          )
        } )}
      </MenuWrapper.CentralSide>      
      <MenuWrapper.RightSide>
        <Button type="button" ghost variant="secondary.main">
          Entrar
        </Button>
        <Button type="button" variant="primary.main">
          cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}