import { Button, buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function AddPlayerDrawer() {
  return <Drawer >
  <DrawerTrigger className={cn(buttonVariants())}>
    Spieler hinzufügen
  </DrawerTrigger>
  <DrawerContent className="flex flex-col gap-2 items-center">
      <DrawerHeader className="max-w-md">
        <DrawerTitle>Spieler hinzufügen</DrawerTitle>
        <DrawerDescription>Trage hier die Spielerdaten ein, um den neuen Spieler hinzuzufügen</DrawerDescription>
      </DrawerHeader>
      <form className="flex flex-col gap-4 w-108">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Spielername" type="text" />
        </div>
        <Select>
          <SelectTrigger>
          <SelectValue placeholder="Spielerrolle auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="guest">Gast</SelectItem>
          <SelectItem value="member">Stammspieler</SelectItem>
          </SelectContent>
        </Select>
        <div>
          <Label htmlFor="balance">Kontostand</Label>
          <Input id="balance" defaultValue={0} type="number" />
        </div>
      </form>
      <DrawerFooter className="max-w-md">
        <Button className="w-108">Submit</Button>
        <DrawerClose>
          <Button variant="outline" className="w-108">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
        </DrawerContent>
</Drawer>
}