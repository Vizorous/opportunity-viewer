import { format } from "date-fns";
import React, { ReactElement } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { DurationTypes, ProgramTypes } from "./SearchTypes";
import SearchDropdown from "./SearchDropdown";
import { setDuration, setProgram, setStartDate } from "./searchOperations";
import { useReactiveVar } from "@apollo/client";
import { durationVar, programVar, startDateVar } from "../../cache";

export type SearchProps = {
  searchWidth: string;
};

export default function Search({ searchWidth }: SearchProps): ReactElement {
  const duration = useReactiveVar(durationVar);
  const startDate = useReactiveVar(startDateVar);
  const program = useReactiveVar(programVar);
  const buttonStyle: string = `btn btn-light bg-white border-0 shadow-none search-btn w-100 text-truncate`;
  return (
    <div className={`${searchWidth} search-wrapper`}>
      <Container
        fluid="sm"
        className="search-btns__container border rounded p-0">
        <ButtonGroup
          aria-label="Search"
          className="search-btns__group w-100 mw-100">
          <SearchDropdown
            buttonStyle={buttonStyle}
            currentType={ProgramTypes}
            currentValue={program || undefined}
            onDropdownChange={setProgram}
            className="search-btn__program"></SearchDropdown>
          <div className="search-btn__divider py-2 text-muted w-3 text-center">
            •
          </div>
          <SearchDropdown
            buttonStyle={buttonStyle}
            currentType={DurationTypes}
            currentValue={duration || undefined}
            onDropdownChange={setDuration}
            className="search-btn__duration"></SearchDropdown>
          <div className="search-btn__divider py-2 text-muted w-3 text-center">
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
                className={`${buttonStyle} rounded-0 h-100`}>
                {format(startDate as Date, "do MMM yy")}
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
