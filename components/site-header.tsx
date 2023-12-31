"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigationbar } from "./navigation-bar";
import { Button } from "@/components/ui/button";
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
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import * as React from "react";
import {cn} from "@/lib/utils";

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

              <SheetContent className="h-full bg-background">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="#" className="flex items-start space-x-2">
                      <h3 className="font-bold">{siteConfig.name}</h3>
                    </Link>
                  </SheetTitle>

                  <SheetDescription>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                      >
                      <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 bg-[#ff8138] rounded-full"
                        alt="pherus"
                        src="/logo.webp"
                      />

                      <div className="mb-2 mt-4 text-lg font-medium">
                        {siteConfig.name}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {siteConfig.siteName}
                      </p>
                    </a>
                  </SheetDescription>
                </SheetHeader>

                <div className="grid gap-4 py-2">
                  <ListItem href="/about" title="Introduction">
                    About Pherus and our vision towards better health care
                  </ListItem>

                  <ListItem href="/manual" title="Users Manual">
                    How to install and use our applications
                  </ListItem>

                  <ListItem href="/showcase" title="Projects">
                    All future projects towards better health care with Pherus
                  </ListItem>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
      <div className="w-full">
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-[15px] p-2 leading-none no-underline outline-none transition-colors bg-accent hover:bg-primary focus:bg-accent",
            className
            )}
          {...props}
          >
          <div className="text-sm font-extrabold leading-none">{title}</div>
          <p className="line-clamp-2 text-xs font-light leading-snug">
            {children}
          </p>
        </a>
      </div>
    );
});
ListItem.displayName = "ListItem";

