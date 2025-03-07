'use client'
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function CardWithForm() {
  return (
    <div className="flex justify-center items-center h-screen">
<Card className="w-[700px]">
      <CardHeader>
        <CardTitle>Montitor Your Spendings</CardTitle>
        <CardDescription>Insert Your Financial Details</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="item">Item</Label>
              <Input id="item" placeholder="name of the item or the reason of expense" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Enter Amount in ETB</Label>
              <Input type="number" id="amount" placeholder="eg. 100 ETB" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="payment">Select payment method</Label>
              <Select>
                <SelectTrigger id="payment">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Telebirr</SelectItem>
                  <SelectItem value="sveltekit">CBE Mobile Banking</SelectItem>
                  <SelectItem value="astro">Mpessa</SelectItem>
                  <SelectItem value="nuxt">Cash</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Confirm Expense</Button>
      </CardFooter>
    </Card>
    </div>
    
  )
}



export default CardWithForm;