
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.min.css';
import SelectTree from './components/antd5.0/SelectTree';
import Upload from './pages/antd/Upload';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Upload />
);
