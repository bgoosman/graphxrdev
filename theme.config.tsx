import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import logo from "./kineviz-logo.png"

const config: DocsThemeConfig = {
  logo: <><img src={logo.src} style={{width: "24px", height: "24px", display: "inline-block", margin: "0 6px 0 0"}} /> graphxr.dev</>, 
  project: {
    link: 'https://github.com/bgoosman/graphxrdev',
  },
  chat: {
    link: 'https://discord.com/channels/1044303284019666984/1094839827800801381',
  },
  docsRepositoryBase: 'https://github.com/bgoosman/graphxrdev',
  footer: {
    text: 'graphxr.dev',
  },
}

export default config
