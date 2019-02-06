import styled from 'vue-emotion';

export default styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 19px);
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 9;
  color: #fff;
  background: #4286f5;
  padding: 10px;
  border-radius: 6px 6px 0 0;
  * {
    font-size: 18px;
  }
  .left,
  .right {
    position: absolute;
  }
  .left {
    left: 10px;
  }
  .right {
    right: 10px;
  }
  .icon {
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0);
    transition: 0.3s;
    &:hover {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #fff;
  box-sizing: border-box;
  border-radius: 0 0 6px 6px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border-radius: 0 0 6px 6px;
    box-shadow: 0 0 0.5px;
    transform: translate(0.5px, 0.5px);
    pointer-events: none;
  }
`;

export const Close = styled.button`
  display: flex;
  align-items: center;
  appearance: none;
  text-decoration: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  color: #fff;
  background: inherit;
  outline: 0;
  border: 0;
  border-radius: 0 6px 0 0;
  padding: 0 20px;
  font-size: 14px !important;
  font-weight: 500;
  transition: 0.3s;
  cursor: default;
  &:active {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2) inset;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: #357df3;
  }
`;

export const Panel = {
  Layout: styled.div`
    position: relative;
    padding: 15px 20px;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 6px;
    background: #ededed;
    box-sizing: border-box;
  `,
  Title: styled.h3`
    color: #333;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 10px;
  `,
  Body: styled.div`
    color: #666;
    font-size: 14px;
    margin: 0;
  `,
};

export const Switch = {
  Layout: styled.div`
    position: relative;
    width: 50px;
    height: 30px;
    border: 1px solid ${(props: any) => (props.active ? '#4cd964' : '#bebebe')};
    background: ${(props: any) => (props.active ? '#4cd964' : 'transparent')};
    border-radius: 30px;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
  `,
  Handle: styled.div`
    display: inline-block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${(props: any) => (props.active && props.dragging ? -7 : 0)}px;
    width: ${(props: any) => (props.dragging ? 35 : 28)}px;
    height: 28px;
    border-radius: 28px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    transition-duration: ${(props: any) => (props.dragging ? 0.2 : 0.3)}s;
    transition-timing-function: ${(props: any) =>
      (props.dragging
        ? 'ease-in-out'
        : 'cubic-bezier(0.175, 0.885, 0.32, 1.275)')};
    transform: translate3d(
      ${(props: any) => (props.active ? '19px' : 0)},
      0,
      0
    );
  `,
};

export const Radio = {
  Layout: styled.label`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &:not(:nth-last-of-type(1)) {
      margin-right: 10px;
    }
    input[type='radio'] {
      display: none;
      &:checked + i {
        background: linear-gradient(to right, #3497ff, #3497ff);
        border-color: transparent;
        &:before {
          transform: scale(1);
        }
      }
    }
  `,
  Button: styled.i`
    display: inline-block;
    position: relative;
    width: 14px;
    height: 14px;
    border: 1px solid #cdcdcd;
    border-radius: 14px;
    background: #fff;
    margin-right: 5px;
    box-sizing: border-box;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1) inset;
    &:before {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 4px;
      height: 4px;
      border-radius: 4px;
      background: #fff;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
      transition: 0.1s ease-in-out;
      transform: scale(0);
    }
  `,
};
