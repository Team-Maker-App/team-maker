import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { subscribeByMatchId } from "services/firestore";

const useMatch = (id) => {
  const history = useHistory();
  const [exist, setExists] = useState(null);
  const [match, setMatch] = useState();

  useEffect(() => {
    const subscription = subscribeByMatchId(id, setMatch);

    subscription.then((matchExist) => {
      setExists(matchExist);
    });
  }, [history, id]);

  return [match, exist];
};

export default useMatch;
