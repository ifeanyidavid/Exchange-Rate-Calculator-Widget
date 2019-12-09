import React from "react";
import styled from "styled-components";

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  .text-muted {
    color: rgba(0, 0, 0, 0.5);
  }
`;

function DateComponent() {
  return (
    <DateWrapper>
      <span className="text-muted">{new Date().toDateString()}</span>
    </DateWrapper>
  );
}

export default DateComponent;
