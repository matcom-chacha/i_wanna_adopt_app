import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}

// results?.data?.breeds?? [] --> Means, are there any results avaiable, if so get the values requires, otherwise returns an empty array
