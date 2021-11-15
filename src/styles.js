import styled from "styled-components";

export const Container = styled.div`
  .head {
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 150px;
    -webkit-border-radius: 150px;
    -moz-border-radius: 150px;
    display: block;
    background: #a787d1;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#a787d1),
      to(#916dbf)
    );
  }

  div.smile {
    width: 75px;
    height: 25px;
    border: 10px solid #222;
    border-top: 0;
    background: rgba(0, 0, 0, 0);
    -moz-border-radius: 0 0 120px 120px / 0 0 90px 90px;
    -webkit-border-radius: 0 0 120px 120px 0 0 90px 90px;
    border-radius: 0 0 120px 120px / 0 0 90px 90px;
    position: absolute;
    bottom: 50px;
    left: 100px;
    box-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
    -webkit-box-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
    -moz-box-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
  }

  .semi-circle-left {
    width: 100px;
    height: 100px;
    left: 30px;
    top: 100px;
    transform: rotateZ(90deg);
    background-color: white;
    position: absolute;
    clip-path: circle(50% at 0%);
  }

  .semi-circle-right {
    width: 100px;
    height: 100px;
    left: 155px;
    top: 100px;
    transform: rotateZ(90deg);
    background-color: white;
    position: absolute;
    clip-path: circle(50% at 0%);
  }

  .pupil {
    position: absolute;
    top: 50%;
    left: 30%;
    width: 20px;
    height: 20px;
    margin: -0.2em 0 0 -0.2em;
    transform: translate(20px, 20px);
    transform: ${(props) =>
      props.x && props.y && `translate(${props.x}px, ${props.y}px)`};
    transition: all 0.2s;
    background: #000;
    border-radius: 4em;
    will-change: transform;
    overflow: hidden;
  }
`;
