"use client";
import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Store {
  query = "Life";
  isLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  setQuery = (query: string) => {
    this.query = query;
  };
  setIsLoading = (loading: boolean) => {
    this.isLoading = loading;
  };
}

export default createContext(new Store());
