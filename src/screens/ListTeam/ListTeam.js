import React, { useEffect } from "react";
import "../../styles/styles.css";
import "./ListTeam.css";
import List from "./List";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";

const ListTeam = ({ location }) => {
  const history = useHistory();

  useEffect(() => {
    if (!location.players) {
      history.push("/");
    }
  }, []);

  return (
    <Layout>
      <List players={location.players} />
    </Layout>
  );
};

export default ListTeam;
