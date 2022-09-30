import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { selectDetails } from "../store/details/details-selector";
import { useEffect } from "react";
import {loadCuntryByName, setClearDetails} from "../store/details/details-action";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentCountry, error, status } = useSelector(selectDetails);
  useEffect(() => {
    dispatch(loadCuntryByName(name));


    return ()=>{
      dispatch(setClearDetails())
    }
  }, [name, dispatch]);
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h1>loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
