import React, { useState } from 'react';
import useLife from './hooks/useLife';
import Table from './components/Table';
import useTimer from './hooks/useTimer';
import ControlPanel from './components/ControlPanel';
import './styles.css';
import { defaultHeight, defaultTime, defaultWidth } from './config'

function App() {
  const [width, setWidth] = useState(defaultWidth);
  const [height, setHeight] = useState(defaultHeight);
  const { grid, reset, nextStep } = useLife(width, height/*, gridPreset */);
  const { started, toggle } = useTimer(nextStep, defaultTime);

  return (
    <>
      <div className="container">
        <ControlPanel
          started={started}
          toggle={toggle}
        />
        <Table gridData={grid} />
      </div>
    </>
  );
}

export default App