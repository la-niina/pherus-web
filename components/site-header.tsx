import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigationbar } from "./navigation-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="bg-transparent sticky top-0 z-40 w-full max-w-screen-2xl p-0 mx-0">
      <div className="container flex h-16 items-center space-x-1 sm:justify-between sm:space-x-0 max-w-screen-2xl pr-[12px] pl-[12px] mx-auto">
        <Navigationbar items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`hover:rounded-full ${buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}`}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`hover:rounded-full ${buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}`}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <div
                  className={`hover:rounded-full sm:hidden flex ${buttonVariants(
                    {
                      size: "icon",
                      variant: "ghost",
                    }
                  )}`}
                >
                  <Icons.menu className="h-5 w-5" />
                  <span className="sr-only">drawer</span>
                </div>
              </SheetTrigger>

              <SheetContent className="h-full rounded-md">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-start space-x-2">
                      <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 bg-[#ff8138] rounded-full"
                        alt="pherus"
                        src="/logo.webp"
                      />
                      <div className="flex flex-col justify-start items-start">
                        <h3 className="font-bold">{siteConfig.name}</h3>
                        <a className="text-[12px]">{siteConfig.slogan}</a>
                      </div>
                    </Link>
                  </SheetTitle>

                  <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription>
                </SheetHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <text>Name</text>
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <text>Name</text>
                  </div>
                </div>

                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}
