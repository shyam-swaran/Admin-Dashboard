import React from "react"

import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd"
import Header from "./header"

// import { GitHubBanner } from "./gh-banner";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ThemedLayoutV2
        Header={Header}
        Title={(titleProps) => {
          return <ThemedTitleV2 {...titleProps} text="Refine" />
        }}
      >
        {children}
      </ThemedLayoutV2>
    </>
  )
}
