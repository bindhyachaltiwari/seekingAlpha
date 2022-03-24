import React from 'react';
import { PanelProps } from '../types';

const ControlPanel: React.FC<PanelProps> = (
  { started, toggle }) => (<div>

    <button className="btn" onClick={toggle}>
      {started ? 'stop' : 'start️'}
    </button>
  </div>)

export default ControlPanel;