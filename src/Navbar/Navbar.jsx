import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  return (
    <div style={{ backgroundColor: "#3A2AD1" }}>
      <MDBNavbar expand="lg" light bgColor="#3A2AD1" className="ms-auto">
        <MDBContainer fluid>
          <MDBNavbarBrand as={Link} to="/">
            Forestallers
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic} className="ms-auto">
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 ms-auto">
              {MenuItems.map((item) => {
                if (item.dropdown.length > 0 && item.display == true) {
                  return (
                    <MDBNavbarItem>
                      <MDBDropdown>
                        <MDBDropdownToggle
                          tag="a"
                          className="nav-link"
                          role="button"
                        >
                          {item.title}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          {item.dropdown.map((itemDropdown) => (
                            <MDBDropdownItem>
                              <Link
                                to={itemDropdown.url}
                                className="dropdown-item"
                              >
                                {itemDropdown.title}
                              </Link>
                            </MDBDropdownItem>
                          ))}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBNavbarItem>
                  );
                } else if (item.display == true) {
                  return (
                    <MDBNavbarItem>
                      <Link to={item.url} className="nav-link">
                        {item.title}
                      </Link>
                    </MDBNavbarItem>
                  );
                } else {
                  return <></>;
                }
              })}

              <MDBNavbarItem>
                <MDBNavbarLink
                  disabled
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
