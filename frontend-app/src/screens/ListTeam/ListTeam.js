import React, { useState } from 'react';
import '../../styles/styles.css';
import './ListTeam.css';
import {ReactComponent as Logo} from '../../styles/svg/teammaker.svg';
import List from './List';

const ListTeam = ({location}) => {
return (
    <div className="flex flex-col justify-center background h-screen">
      <div className="flex flex-row self-center my-10 absolute top-0">
        <Logo />
      </div>
     <List players={location.players} /> 
    </div>
  );
};

export default ListTeam;