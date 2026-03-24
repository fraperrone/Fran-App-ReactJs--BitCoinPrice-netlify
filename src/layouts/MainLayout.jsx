// generamos el main layout

import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet /> {/* Aquí se inyectan las páginas */}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
