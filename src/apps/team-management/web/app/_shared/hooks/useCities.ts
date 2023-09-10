import { useEffect, useState } from 'react';
import Configurations from '../../../config/Configurations';

export function useCities(country: string) {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    async function getCities() {
      if (country === '') return setCities([]);
      try {
        const response = await fetch(Configurations.citiesUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ country }),
        });
        const data = await response.json();
        const mapped = data.data.map((city) => ({
          value: city,
          label: city,
        }));
        mapped.sort(function (a, b) {
          if (a.value < b.value) return -1;
          if (a.value > b.value) return 1;
          return 0;
        });
        setCities(mapped);
      } catch (error) {
        setCities([]);
      }
    }
    getCities();
  }, [country]);
  return {
    cities,
  };
}
