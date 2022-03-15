import { format, parse } from "date-fns/esm";
import React, { useMemo, useState } from "react";
import { Badge, Container, Media } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LikeButton from "../../components/LikeButton/LikeButton";
import { useResponsive } from "../../utils/customHooks";
import { DurationTypes, ProgramTypes } from "../Search/SearchTypes";

const responsiveResizes = (isMobile: boolean) => {
  const containerP: string = isMobile ? "p-2" : "p-3";
  const textContainerP: string = isMobile ? "pt-3 px-2" : "pt-2 w-65";
  const textM: string = isMobile ? "mb-1" : "mb-2";
  const textW: string = isMobile ? "" : "w-85";
  const textSize: string = isMobile ? "" : "f16";
  return { containerP, textContainerP, textM, textW, textSize };
};

type availableDateType = {
  start_date: string;
  end_date: string;
};

interface OppCardProps {
  salaryInfo: {
    salary: number | null;
    salary_currency: {
      alphabetic_code: string | null;
    };
    salary_periodicity: string | null;
  };
  description: string;
  coverPhoto: string;
  id: number;
  durationType: string;
  location: string;
  applicantsCount: number;
  title: string;
  companyName: string;
  program: string;
  sdg?: {
    sdg_goal_no: string;
    short_name: string;
  };
  availableSlots: Array<availableDateType>;
}
export default function OppCard({
  salaryInfo,
  availableSlots,
  sdg,
  applicantsCount,
  coverPhoto,
  description,
  durationType,
  id,
  location,
  title,
  program,
  companyName,
}: OppCardProps) {
  // debugger;
  const [favorited, setFavorited] = useState(false);
  const history = useHistory();
  const { isXS: isMobile } = useResponsive();
  const { containerP, textContainerP, textM, textW, textSize } = useMemo(
    () => responsiveResizes(isMobile),
    [isMobile]
  );

  return (
    <Container
      className={` ${containerP} opp-card rounded `}
      onClick={() =>
        window.open(
          `https://aiesec.org/opportunity/${ProgramTypes.keys[program].link}/${id}`,
          "_blank"
        )
      }>
      <div className="opp-card__save-btn">
        <LikeButton program={program}></LikeButton>
      </div>
      {/* <LikeButton
        favorited={favorited}
        setFavorited={setFavorited}></LikeButton> */}
      <Media className="flex-wrap">
        <img
          className=" rounded mr-4"
          width={isMobile ? `100%` : `30%`}
          height="160px"
          style={{ objectFit: "cover" }}
          src={coverPhoto}
          alt="Generic placeholder"
        />
        <Media.Body className={`${textContainerP} `}>
          <div className="d-flex justify-content-between">
            <h5>{title}</h5>
          </div>
          <p className={`${textM}`}>
            {DurationTypes.keys[durationType].title}

            {sdg ? (
              <span>
                , SDG {sdg?.sdg_goal_no}: {sdg?.short_name}
              </span>
            ) : null}
            {salaryInfo?.salary ? (
              <span>
                , {salaryInfo?.salary}{" "}
                {salaryInfo?.salary_currency?.alphabetic_code}{" "}
                {salaryInfo?.salary_periodicity}
              </span>
            ) : null}
            {!sdg && salaryInfo && !salaryInfo.salary ? (
              <span>, Unpaid</span>
            ) : null}
          </p>
          <p
            className={`${textM} ${textW} ${textSize} text-muted opp-card__description `}>
            {description}
          </p>
          {/* <div className="d-flex justify-content-between"> */}
          {/* <p className={`${textM} text-muted `}>{companyName}</p> */}
          <div className="d-inline-flex flex-wrap">
            {availableSlots.map((val: availableDateType, index: number) => (
              <div className="my-1 mr-2" key={`outerdiv ${index}`}>
                <Badge
                  key={`badge ${index}`}
                  variant="light"
                  bsPrefix={"badge border bg-transparent border-secondary"}>
                  <p
                    className="p-1 m-0 f12 font-weight-normal "
                    key={`text ${index}`}>
                    {format(
                      parse(val.start_date as string, "yyyy-L-d", new Date()),
                      "d MMM yy"
                    )}{" "}
                    -{" "}
                    {format(
                      parse(val.end_date as string, "yyyy-L-d", new Date()),
                      "d MMM yy"
                    )}
                  </p>
                </Badge>
              </div>
            ))}
          </div>
          {/* <p className={`${textM} text-muted f12`}> */}
          {/* {applicantsCount} Applicants */}
          {/* </p> */}
          {/* </div> */}
        </Media.Body>
      </Media>
    </Container>
  );
}
