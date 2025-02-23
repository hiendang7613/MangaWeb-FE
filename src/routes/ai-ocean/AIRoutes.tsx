import { Routes, Route } from 'react-router-dom';
import AIOcean from '../../pages/ai-ocean/AIOcean';
import ComputerVision from '../../pages/ai-ocean/ComputerVision';

function AIRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AIOcean />} />  {/* Use "/" to indicate the root of this route */}
      <Route path="/computer-vision" element={<ComputerVision />} />
      
    </Routes>
  );
}

export default AIRoutes;
