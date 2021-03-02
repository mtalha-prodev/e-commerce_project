import {
  ACCESSORIES,
  BAGS,
  CLOSE_SIDEBAR,
  KIDS,
  MENSHOES,
  WOMENCLOTHING,
  MENCLOTHING,
  WOMENSHOES,
} from "../../../../useReducer/actionType";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export const categoriesData = [
  {
    title: "MEN'S SHOES",
    liClasses: "nav-item",
    linkClasses: "nav-link",
    path: "/men/shoes",
    type: CLOSE_SIDEBAR,
    iconType: MENSHOES,
    iconClasses: "arrow-link",
    icon: <ArrowRightIcon />,
  },
  {
    title: "MEN'S clothing",
    liClasses: "nav-item",
    linkClasses: "nav-link",
    path: "/men/clothing",
    type: CLOSE_SIDEBAR,
    iconType: MENCLOTHING,
    iconClasses: "arrow-link",
    icon: <ArrowRightIcon />,
  },
  {
    title: "woMEN'S SHOES",
    liClasses: "nav-item",
    linkClasses: "nav-link",
    path: "/women/shoes",
    type: CLOSE_SIDEBAR,
    iconType: WOMENSHOES,
    iconClasses: "arrow-link",
    icon: <ArrowRightIcon />,
  },
  {
    title: "WOMEN'S clothing",
    liClasses: "nav-item",
    linkClasses: "nav-link",
    path: "/menshoes",
    type: CLOSE_SIDEBAR,
    iconType: WOMENCLOTHING,
    iconClasses: "arrow-link",
    icon: <ArrowRightIcon />,
  },
  {
    title: "KIDS",
    liClasses: "nav-item",
    linkClasses: "nav-link",
    path: "/kids",
    type: CLOSE_SIDEBAR,
    iconType: KIDS,
    iconClasses: "arrow-link",
    icon: <ArrowRightIcon />,
  },
  {
    title: "BAGS",
    liClasses: "nav-item",
    linkClasses: "nav-link",
    path: "/bags",
    type: CLOSE_SIDEBAR,
    iconType: BAGS,
    iconClasses: "arrow-link",
    icon: <ArrowRightIcon />,
  },
  {
    title: "accessories",
    liClasses: "nav-item",
    linkClasses: "nav-link",
    path: "/accessories",
    type: CLOSE_SIDEBAR,
    iconType: ACCESSORIES,
    iconClasses: "arrow-link",
    icon: <ArrowRightIcon />,
  },
];
