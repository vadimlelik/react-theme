import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { useEffect } from "react";
import {
  selectAllCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from "../store/countries/countries-selector";
import { loadCountries } from "../store/countries/countries-action";
import { selectSearch } from "../store/control/controls-selector";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search })
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);
  return (
    <>
      <Controls />

      {error && <h1>can't featch data</h1>}
      {status === "loading" && <h1> Loading</h1>}

      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              onClick={() => navigate(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};
