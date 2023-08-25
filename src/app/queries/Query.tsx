"use client";
import { useState, useEffect } from "react";

interface DataItem {
  id: number;
  src: {
    medium: string;
  };
  alt: string;
}

export const useFetchImageData = (query: string) => {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https:///api.pexels.com/v1/search?query=${query}&per_page=40`, {
      headers: {
        Authorization:
          "27khSv08qedMflje82DmbvI8tFkkoIdhDtuXs4i0dJr6jUu4nyOR8DNj",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData.photos);
        setLoading(false);
        console.log(data);
      });
  }, [data, query]);

  return { data, isLoading };
};
