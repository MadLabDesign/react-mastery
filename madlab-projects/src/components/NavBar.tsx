import { FC } from 'react';
import styled from 'styled-components';


interface INavbarProps {
}

const Navbar: FC<INavbarProps> = () => {
  return (
<>
<NavBarContainer className="header-navs d-flex align-items-stretch flex-stack h-lg-70px w-100 py-5 py-lg-0"
              id="kt_header_navs"
              data-kt-drawer="true"
              data-kt-drawer-name="header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="{default:'200px', '300px': '250px'}"
              data-kt-drawer-direction="start"
              data-kt-drawer-toggle="#kt_header_navs_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="append"
              data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header'}"
            >
              <div className="d-lg-flex container-xxl w-100">
                <div
                  className="d-lg-flex flex-column justify-content-lg-center w-100"
                  id="kt_header_navs_wrapper"
                >
                  <div
                    className="tab-content"
                    data-kt-scroll="true"
                    data-kt-scroll-activate="{default: true, lg: false}"
                    data-kt-scroll-height="auto"
                    data-kt-scroll-offset="70px"
                  >
                    <div
                      className="tab-pane fade active show"
                      id="kt_header_navs_tab_1"
                    >
                      <div className="header-menu flex-column align-items-stretch flex-lg-row flex-center">
                        <div
                          className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold align-items-stretch flex-grow-1 flex-center"
                          id="#kt_header_menu"
                          data-kt-menu="true"
                        >
                          <div
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-start"
                            className="menu-item menu-lg-down-accordion me-lg-1"
                          >
                            <a className="menu-link py-3" href="#">
                              <span className="menu-icon">
                                <i className="bi bi-plus-circle text-primary fs-3"></i>
                              </span>
                              <span className="menu-title">Start New Case</span>
                            </a>
                          </div>
                          <div
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-start"
                            className="menu-item menu-lg-down-accordion me-lg-1"
                          >
                            <a className="menu-link py-3" href="#">
                              <span className="menu-icon">
                                <i className="bi bi-clock text-primary fs-3"></i>
                              </span>
                              <span className="menu-title">
                                Schedule Live Review
                              </span>
                            </a>
                          </div>
                          <div
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-start"
                            className="menu-item menu-lg-down-accordion me-lg-1"
                          >
                            <a className="menu-link py-3" href="#">
                              <span className="menu-icon">
                                <i className="bi bi-people text-primary fs-3"></i>
                              </span>
                              <span className="menu-title">View Patients</span>
                            </a>
                          </div>
                          <div className="menu-item menu-lg-down-accordion me-lg-1">
                            <a className="menu-link py-3" href="#">
                              <span className="menu-icon">
                                <i className="bi bi-briefcase text-primary fs-3"></i>
                              </span>
                              <span className="menu-title">My Account</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NavBarContainer>
</>
  );
};

export default Navbar;

const NavBarContainer = styled.nav`
width:100% ;
`