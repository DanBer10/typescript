import { useState, useEffect, useMemo } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data: Payload) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
}

const CustomHookComponent = () => {
  const { data } = useFetchData<Beverage[]>("/hv-taplist.json");
  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
    [data]
  );
  return (
    <div>
      {portlandTaps.length && (
        <img src={portlandTaps![2].logo} alt="beverage logo" />
      )}
    </div>
  );
};

export default CustomHookComponent;
