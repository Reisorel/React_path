import { useState } from "react";
import shadowList from "./shadowList/shadowList";
import boxPanel from "./boxPanel/boxPanel";

export default function leftContainer() {

  const [tabs, SetTabs] = useState(0);

  const tabsList = [
    {name: "Shadow", composant: <shadowList/> },
    {name: "BoxPanel", composant: <boxPanel/> }
  ]

  return (
    <div
      className="relative mt-20 w-[600px] h-[550x] border
    rounded-b rounded-tr border-gray-300 shadow-xl
    bg-gray-50 md:mt-0"
    >
    <div className="flex-absolute -translate-y-full -left[1px]">

    </div>

    </div>
  );
}
