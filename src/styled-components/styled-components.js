import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: #282c34;
  min-height: 101vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`;

export const NavbarWrapper = styled.nav`
  margin: 40px 0;

  a {
    transition: all 0.3s;
    box-sizing: border-box;
    color: #fcf8e8;
    border: 4px solid transparent;
    background: #5800ff;
    padding: 8px 24px;
    border-radius: 6px;
    text-decoration: none;
    margin: 2px 8px;
  }
  .activeLink {
    color: #fecd1a;
    border: 4px solid #28ffbf;
  }
`;

export const HomeWrapper = styled.div`
  button {
    background-color: #405cf5;
    border-radius: 6px;
    border-width: 0;
    box-shadow: rgb(50 50 93 / 10%) 0 0 0 1px inset,
      rgb(50 50 93 / 10%) 0 2px 5px 0, rgb(0 0 0 / 7%) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-size: 100%;
    height: 44px;
    width: 100%;
    line-height: 1.15;
    margin: 12px 0 0;
    padding: 0 25px;
    text-align: center;
    text-transform: none;
    margin: 12px 0;
    transition: all 0.4s, box-shadow 0.08s ease-in;
  }
`;

export const MessageWrapper = styled.div`
  position: relative;
  padding: 6px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 0 20px;
  position: fixed;
  top: 40px;
  right: 0;
  left: 0;
  z-index: 10;
  transition: opacity 150ms, transform 150ms;
  background: #efefef;
  max-width: 180px;
  text-align: center;

  p {
    margin: 0;
  }

  span {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
  }

  &.danger {
    color: #d6281c;
    border: 1px solid #d6281c;
  }
  &.pendingSingle {
    color: #4747ff;
    border: 1px solid #4747ff;
  }
  &.pending {
    color: #0404ba;
    border: 1px solid #0404ba;
  }
`;
