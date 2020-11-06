import { format } from "date-fns";
import React, { ReactElement, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import { DurationTypes, ProgramTypes } from "./SearchTypes";
import SearchDropdown from "./SearchDropdown";
import { setDuration, setProgram } from "./searchOperations";
import { useReactiveVar } from "@apollo/client";
import { durationVar, programVar } from "../../cache";

export type SearchProps = {
  searchWidth: string;
  // currentProgram?: ProgramTypes | DurationTypes;
  // setCurrentProgram?: Function;
  // currentType: typeof ProgramTypes | typeof DurationTypes;
};

export default function Search({ searchWidth }: SearchProps): ReactElement {
  const [startDate, setStartDate] = useState(new Date());
  const duration = useReactiveVar(durationVar);
  const program = useReactiveVar(programVar);
  const dateButtonStyle: string = `btn btn-light bg-white border-0 shadow-none search-btn text-truncate w-100 rounded-0`;
  return (
    <div className={`${searchWidth} ml-2 search-wrapper`}>
      <Container
        fluid="sm"
        className="search-btns__container border rounded p-0">
        <ButtonGroup
          aria-label="Search"
          className="search-btns__group w-100 mw-100">
          {/* <Button
            variant="light"
            className={`search-btn__programmes ${buttonStyle}`}>
            Left
          </Button>   */}
          <SearchDropdown
            currentType={ProgramTypes}
            currentValue={program || undefined}
            onDropdownChange={setProgram}
            className="search-btn__program"></SearchDropdown>
          <div className="search-btn__divider py-2 text-muted w-3 text-center">
            •
          </div>

          <SearchDropdown
            currentType={DurationTypes}
            currentValue={duration || undefined}
            onDropdownChange={setDuration}
            className="search-btn__duration"></SearchDropdown>
          <div className="search-btn__divider py-2 m-auto text-muted w-3 text-center">
            •
          </div>

          <DatePicker
            wrapperClassName="w-28"
            popperPlacement="bottom-end"
            selected={startDate}
            onChange={(date) => setStartDate(date as Date)}
            customInput={
              <Button
                variant="light"
                id="search-btn__start-date"
                className={`${dateButtonStyle} h-100`}>
                {format(startDate, "do MMM")}
              </Button>
            }
          />
          <Button
            variant="light"
            className="bg-white border-0 shadow-none white-button-click w-10 mw-10 p-0 search-icon">
            <i className="fas fa-search text-primary"></i>
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}
