import { Home, TimePage, Guide, SearchPage, BackStage } from "@/pages";
import {
  HomeIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  CircleStackIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "計畫說明",
    path: "/home",
    element: <Home />,
  },

  {
    icon: DocumentTextIcon,
    name: "使用說明",
    path: "/guide",
    element: <Guide />,
  },
  {
    icon: CircleStackIcon,
    name: "State of Taiwan 資料庫",
    path: "/timeline",
    element: <TimePage />,
  },
  {
    icon: MagnifyingGlassIcon,
    name: "搜尋事件",
    path: "/search",
    element: <SearchPage />,
  },
//   {
//     icon: AdjustmentsVerticalIcon,
//     name: "後台",
//     path: "/backstage",
//     element: <BackStage />,
//   },
  
];

export default routes;
