import { useEffect, useState } from 'react';
import Configurations from '../../../config/Configurations';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function getCountries() {
      const response = await fetch(Configurations.countriesUrl);
      const data = await response.json();
      const mapped = data.map((country) => ({
        value: country.name.common,
        label: country.name.common,
        icon: country.flags.png,
      }));
      mapped.sort(function (a, b) {
        if (a.value < b.value) return -1;
        if (a.value > b.value) return 1;
        return 0;
      });
      setCountries(mapped);
    }
    getCountries();
  }, []);
  return {
    countries,
  };
}
