import React, { ReactElement, useRef } from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { SelectCallback } from "react-bootstrap/esm/helpers";
import { enumKeys } from "../../utils/helpers";
import {
  ProgramTypes,
  DurationTypes,
  ProgramKeys,
  DurationKeys,
} from "./SearchTypes";
interface Props {
  currentValue: ProgramKeys | DurationKeys | undefined;
  currentType: typeof ProgramTypes | typeof DurationTypes;
  onDropdownChange: Function;
  className?: string;
  buttonStyle?: string;
}

export default function SearchDropdown({
  className,
  currentValue,
  currentType,
  onDropdownChange,
  buttonStyle,
}: Props): ReactElement {
  const type = useRef(currentType === ProgramTypes ? "program" : "duration")
    .current;
  const keys = currentType.keys;
  const onClear = (val: string) => onDropdownChange(null);
  return (
    <Dropdown as={ButtonGroup} className={`${className} w-28`}>
      <Dropdown.Toggle
        bsPrefix={`${buttonStyle} ${currentValue ? "" : "text-muted"} `}>
        {currentType?.keys[currentValue as ProgramKeys | DurationKeys]?.title ||
          `Select ${type}`}
      </Dropdown.Toggle>
      <Dropdown.Menu bsPrefix="dropdown-override">
        {enumKeys(keys).map((value: ProgramKeys | DurationKeys) => {
          return (
            <Dropdown.Item
              eventKey={value}
              key={value}
              onSelect={onDropdownChange as SelectCallback}>
              {currentType?.keys[value]?.title}
            </Dropdown.Item>
          );
        })}
        <Dropdown.Divider />
        <Dropdown.Item
          bsPrefix={"dropdown-item-clear"}
          disabled={!currentValue}
          eventKey={"clear"}
          key={"clear"}
          onSelect={onClear as SelectCallback}>
          Clear Selection
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
