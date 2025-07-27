import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Mohammad Akhtar Babu. All rights
      reserved.
    </FooterContainer>
  );
}

export default Footer;
