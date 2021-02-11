import React from "react"
import { Logo } from "../../../theme/Logo"
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
      <MenuWrapper.Central>
        {links.map((link) => {
          return (
            <li key={link.url}>
              <a href={link.url}>
                {link.texto}
              </a>
            </li>
          )
        } )}
      </MenuWrapper.Central>      
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">
          cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}