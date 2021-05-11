import React, { useEffect, useState } from "react";
import { db } from "../../helpers/firebase";
// Data

//Components
import Layout from "../../components/Layout";
import Feedback from "../../components/Feedback/Feedback";

const Match = ({ match }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { location, admin, max_players } = data;
  useEffect(() => {
    const fetchData = async () => {
      const doc = await db.collection("matches").doc(match.params.id).get();

      if (doc.exists) {
        setData(doc.data());
        setLoading(false);
      } else {
        console.log("No such document!");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col p-5 gap-1 max-w-screen-xl mx-auto w-full text-white font-sans">
        {loading && <p>Loading...</p>}
        {!loading && (
          <>
            <p>Datos del partido</p>
            <p>ID: {match.params.id}</p>
            <p>Ubicación: {location}</p>
            <p>Admin: {admin}</p>
            <p>Max: {max_players}</p>
            <p>Jugadores:</p>
            <ol className="list-decimal	list-inside	">
              {data?.players?.map((player) => (
                <li>{player}</li>
              ))}
            </ol>
          </>
        )}
      </div>
      <div className="w-full text-center p-4 pin-b">
        <Feedback />
      </div>
    </Layout>
  );
};

export default Match;
