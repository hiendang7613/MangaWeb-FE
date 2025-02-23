import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AIOcean from '../pages/ai-ocean/AIOcean';
// import DevOcean from './pages/dev-ocean';
// import Others from './pages/Others';
import Layout from '../components/Layout';
import AIRoutes from './ai-ocean/AIRoutes';
import NotebookPosts from '../components/NotebookPosts';

function MainRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-ocean/*" element={<AIRoutes />} />
        {/* <Route path="/dev-ocean/*" element={<DevOcean />} />
        <Route path="/others" element={<Others />} />  */}
        <Route path="/uploads" element={<NotebookPosts />} />
      </Routes>
    </Layout>
  );
}

export default MainRoutes;