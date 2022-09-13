/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Layout and Routing for reusable components
 */
import { Suspense } from 'react';
import './Layout.scss';
import { useTranslation } from 'react-i18next';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../header/header';
import Sidenav from '../sidenav/Sidenav';
import Footer from '../footer/Footer';
import PrivateRoute from '../../Route/route/private-route';
import routing from '../../Route/route/routing';
import { authClass } from '../../components/auth/services/auth.service';

export function Layout() {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <div className="d-flex h-100">
          <div className="flex-shrink-1 side-nav-wrapper h-100">
            <Sidenav />
          </div>
          <div className="main-wrapper">
            <div className="main-conatiner">
              <Routes>
                {routing.map((route: any, idx: number) => {
                  const designation = authClass.getDesignation();
                  if (
                    route.unauthorized.find(
                      (desig: string) => desig === designation
                    )
                  ) {
                    return undefined;
                  } else {
                    return (
                      <Route
                        key={idx}
                        path={route.path}
                        element={
                          <PrivateRoute>
                            <Suspense
                              fallback={
                                <div className="tab-panel-placeholder">
                                  {t('LOADING')}
                                </div>
                              }
                            >
                              <route.component />
                            </Suspense>
                          </PrivateRoute>
                        }
                      />
                    );
                  }
                })}
              </Routes>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Layout;
