import React, { ReactElement, useRef } from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { SelectCallback } from "react-bootstrap/esm/helpers";
import { enumKeys } from "../../utils/helpers";
import { ProgramTypes, DurationTypes } from "./SearchTypes";
interface Props {
  currentValue: ProgramTypes | DurationTypes | undefined;
  currentType: typeof ProgramTypes | typeof DurationTypes;
  onDropdownChange?: (val: string) => void;
  className?: string;
}

export default function SearchDropdown({
  className,
  currentValue,
  currentType,
  onDropdownChange,
}: Props): ReactElement {
  const buttonStyle: string = `btn btn-light bg-white ${
    currentValue || "text-muted"
  } border-0 shadow-none search-btn w-100 mw-100 text-truncate`;
  const type = useRef(currentType === ProgramTypes ? "program" : "duration")
    .current;
  return (
    <Dropdown as={ButtonGroup} className={`${className} w-28`}>
      <Dropdown.Toggle bsPrefix={buttonStyle}>
        {currentValue || `Select ${type}`}
      </Dropdown.Toggle>
      <Dropdown.Menu bsPrefix="dropdown-override">
        {enumKeys(currentType).map((key: string) => {
          if (key === "clear") {
            return (
              <React.Fragment key={`${key} fragment`}>
                <Dropdown.Divider />
                <Dropdown.Item
                  bsPrefix={"dropdown-item-clear"}
                  disabled={!currentValue}
                  eventKey={key}
                  key={key}
                  onSelect={onDropdownChange as SelectCallback}>
                  {currentType[key]}
                </Dropdown.Item>
              </React.Fragment>
            );
          }
          return (
            <Dropdown.Item
              eventKey={key}
              key={key}
              onSelect={onDropdownChange as SelectCallback}>
              {currentType[key]}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
