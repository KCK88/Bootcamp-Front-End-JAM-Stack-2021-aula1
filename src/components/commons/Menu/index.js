import React from "react"
import { Logo } from "../../../theme/Logo"
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
            <li>
              <a href={link.url}>
                {link.texto}
              </a>
            </li>
          )
        } )}
      </MenuWrapper.Central>      
      <MenuWrapper.RightSide>
        <button>
          Entrar
        </button>
        <button>
          cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}