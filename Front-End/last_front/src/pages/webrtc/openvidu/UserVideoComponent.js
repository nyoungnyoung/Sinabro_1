import React, { Component } from "react";
import styled from "styled-components";
import OpenViduVideoComponent from "./OvVideo";
import "./UserVideo.css";

const StyledVideo = styled.div`
  width: 100%;
`;

const UserVideoComponent = ({ streamManager }) => {
  const getNicknameTag = () => {
    return JSON.parse(streamManager.stream.connection.data).clientData;
  };

  return (
    <div>
      {streamManager !== undefined ? (
        <StyledVideo className="streamcomponent">
          <OpenViduVideoComponent streamManager={streamManager} />
          <div>
            <p>{getNicknameTag()}</p>
          </div>
        </StyledVideo>
      ) : null}
    </div>
  );
};

export default UserVideoComponent;