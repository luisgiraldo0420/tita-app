import './app.scss'
import { Layout } from './layouts/Layout';
import { Navigation } from './routes';
import { ToastContainer } from "react-toastify";
import { AuthProvider } from './context';



function App() {
  return (
    <AuthProvider>
      <Layout>
        <div className="App">
          <h1>hola mundo desde el home</h1>
          <Navigation/>
          <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
        </div>
      </Layout>
    </AuthProvider>
  );
}

export default App;
