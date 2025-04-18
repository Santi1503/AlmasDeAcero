import React from 'react';
import ReportajeList from '../components/ReportajeList';
import FadeScrollArea from '../components/FadeScrollArea'; // ruta según dónde lo pongas
import { reportajesBomberos } from '../constants/ReportajesBomberos';

const Bomberos = () => {
  return (
    <FadeScrollArea className="flex-1 pt-20 pb-10 px-4">
    <ReportajeList reportajes={reportajesBomberos} basePath="/profesiones/bomberos" />
  </FadeScrollArea>
  );
};

export default Bomberos;
