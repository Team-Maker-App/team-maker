import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { ReactComponent as ShuffleSVG } from '../../styles/svg/shuffle.svg';
import WavyDivider from '../../components/WavyDivider';
import Logo from '../../components/Logo';

const Step2 = () => {
  const history = useHistory();

  const navigate = () => {
    history.push({
      pathname: '/create',
    });
  };

  const nextStep = () => {
    history.push({
      pathname: '/step3',
    });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        height: '100vh',
      }}
      className="mx-auto bg-white max-w-screen-xl"
    >
      <div className="grid place-items-center w-full  bg-white shadow-xl py-5">
        <Logo width={250} />
        <ShuffleSVG className="w-3/4" />
      </div>

      <div className="flex flex-col bg-white text-primary font-bold w-full">
        <WavyDivider />
        <div className="flex flex-col justify-around p-6 flex-1 bg-primary">
          <p className="text-white font-sans text-center text-xl pb-10">Team Maker se encarga de mezclarlos aleatoriamente</p>
          <div className="flex flex-row justify-around">
            <button type="button" onClick={navigate} className="text-white font-sans text-center self-center text-decoration: underline ">CREAR YA</button>
            <Button text="Siguiente" action={nextStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
