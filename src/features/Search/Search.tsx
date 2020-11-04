import React, { ReactElement } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";

interface Props {
  searchWidth: string;
}

export default function Search({ searchWidth }: Props): ReactElement {
  const buttonStyle: string = `bg-white text-muted border-0 shadow-none white-button-click search-btn w-100 text-truncate`;

  return (
    <div className={`${searchWidth} ml-2`}>
      <Container
        fluid="sm"
        className="border rounded p-0 -justify-content-center align-items-center">
        <ButtonGroup aria-label="Search" className="d-flex w-100">
          <Button variant="light" className={`${buttonStyle}`}>
            Left
          </Button>
          <div className="py-2 text-muted">•</div>
          <Button variant="light" className={`${buttonStyle} `}>
            Middle
          </Button>
          <div className="py-2 text-muted">•</div>
          <Button variant="light" className={`${buttonStyle}`}>
            Right
          </Button>
          <Button
            variant="light"
            className="bg-white border-0 shadow-none white-button-click">
            <i className="fas fa-search text-primary"></i>
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}
