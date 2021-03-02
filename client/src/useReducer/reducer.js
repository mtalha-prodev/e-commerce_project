import {
  ACCOUNT,
  CATEGORIES,
  CLOSE_SIDEBAR,
  HOME,
  PAGES,
  SHOPPING,
  TRIGER,
  BACK_MENU,
  MENSHOES,
  BACK_CATEGORIES,
  MENCLOTHING,
  ACCESSORIES,
  KIDS,
  BAGS,
  WOMENCLOTHING,
  WOMENSHOES,
} from "./actionType";

export const initialState = {
  menu: false,
  home: false,
  shopping: false,
  categories: false,
  account: false,
  pages: false,
  menshoes: false,
  menclothing: false,
  womenshoes: false,
  womenclothing: false,
  kids: false,
  bags: false,
  accessories: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case TRIGER:
      return {
        ...state,
        menu: true,
      };
    case HOME:
      return {
        ...state,
        home: true,
      };
    case SHOPPING:
      return {
        ...state,
        shopping: true,
      };
    case CATEGORIES:
      return {
        ...state,
        categories: true,
      };
    case MENSHOES:
      return {
        ...state,
        menshoes: true,
      };
    case WOMENSHOES:
      return {
        ...state,
        womenshoes: true,
      };
    case MENCLOTHING:
      return {
        ...state,
        menclothing: true,
      };
    case WOMENCLOTHING:
      return {
        ...state,
        womenclothing: true,
      };
    case KIDS:
      return {
        ...state,
        kids: true,
      };
    case BAGS:
      return {
        ...state,
        bags: true,
      };
    case ACCESSORIES:
      return {
        ...state,
        accessories: true,
      };
    case BACK_CATEGORIES:
      return {
        ...state,
        menshoes: false,
        menclothing: false,
        womenshoes: false,
        womenclothing: false,
        kids: false,
        bags: false,
        accessories: false,
        categories: true,
      };
    case ACCOUNT:
      return {
        ...state,
        account: true,
      };
    case PAGES:
      return {
        ...state,
        pages: true,
      };
    case BACK_MENU:
      return {
        ...state,
        home: false,
        shopping: false,
        categories: false,
        pages: false,
        account: false,
        menu: true,
      };

    case CLOSE_SIDEBAR:
      return {
        menu: false,
        category: false,
      };
    default:
      return state;
  }
};
