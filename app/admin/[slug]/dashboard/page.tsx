"use client";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col max-w-screen-2xl">
      <div className="w-full max-w-screen-2xl">
        <Tabs
          defaultValue="account"
          className="w-full max-w-screen-2xl grid grid-cols-12 gap-5"
        >
          <TabsList className="flex flex-row sm:flex-col h-[100vh] col-span-12 sm:col-span-1 items-center justify-center">
            <TabsTrigger value="dashboard" className="h-10 w-10 rounded-full">
              <Icons.dashboards className="h-5 w-5 fill-none" />
            </TabsTrigger>

            <TabsTrigger value="overview" className="h-10 w-10 rounded-full">
              <Icons.database className="h-5 w-5 fill-none" />
            </TabsTrigger>

            <TabsTrigger value="storage" className="h-10 w-10 rounded-full">
              <Icons.storage className="h-5 w-5 fill-none" />
            </TabsTrigger>

            <TabsTrigger value="" className="h-10 w-10 rounded-full">
              <Icons.logout className="h-5 w-5 fill-none" />
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="overview"
            className="w-full max-w-screen-2xl col-span-12 sm:col-span-11"
          >
            <div className="flex flex-col w-full  items-center justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full">
                <Card className="w-auto">
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you're
                      done.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="w-auto">
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you're
                      done.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="w-auto">
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you're
                      done.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="dashboard"
            className="w-full max-w-screen-2xl col-span-12 sm:col-span-11"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent
            value="storage"
            className="w-full max-w-screen-2xl col-span-12 sm:col-span-11"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
