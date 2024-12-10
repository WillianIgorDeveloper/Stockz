import { sidebarLinks } from "@utils"

export function findTagForLink(pathname: string) {
  for (const sidebarLink of sidebarLinks) {
    if (sidebarLink.items.length === 0) {
      if (pathname === sidebarLink.url) {
        return sidebarLink.tag
      }
    }
  }

  return ""
}
