import React, { useMemo, useState } from "react";
import { Container, Media } from "react-bootstrap";
import LikeButton from "../../components/LikeButton/LikeButton";
import { useResponsive } from "../../utils/customHooks";
import {
  setEditDescription,
  setEditId,
  setEditTitle,
  setModalShow,
} from "../EditModal/EditModalOperations";
import { DurationTypes, ProgramTypes } from "../Search/SearchTypes";

const responsiveResizes = (isMobile: boolean) => {
  const containerP: string = isMobile ? "p-2" : "p-3";
  const textContainerP: string = isMobile ? "pt-3 px-2" : "pt-2 w-65";
  const textM: string = isMobile ? "mb-1" : "mb-2";
  const textW: string = isMobile ? "" : "w-85";
  const textSize: string = isMobile ? "" : "f16";
  return { containerP, textContainerP, textM, textW, textSize };
};

interface OppCardProps {
  description: string;
  coverPhoto: string;
  id: number;
  durationType: string;
  location: string;
  applicantsCount: number;
  title: string;
  companyName: string;
  program: string;
}
export default function OppCard({
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
  const setEditItems = (id: number, title: string, description: string) => {
    setEditId(id);
    setEditTitle(title);
    setEditDescription(description);
    setModalShow(true);
  };

  const [favorited, setFavorited] = useState(false);

  const { isXS: isMobile } = useResponsive();
  const { containerP, textContainerP, textM, textW, textSize } = useMemo(
    () => responsiveResizes(isMobile),
    [isMobile]
  );

  return (
    <Container
      className={` ${containerP} opp-card rounded `}
      onClick={() => setEditItems(id, title, description)}>
      <LikeButton
        className="opp-card__save-btn"
        favorited={favorited}
        setFavorited={setFavorited}></LikeButton>
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
          <p className={`${textM} text-muted`}>
            {location}, {DurationTypes.keys[durationType].title}
          </p>
          <p className={`${textM} ${textW} ${textSize} opp-card__description `}>
            {description}
          </p>
          <div className="d-flex justify-content-between">
            <p className={`${textM} text-muted `}>{companyName}</p>
            <p className={`${textM} text-muted f12`}>
              {applicantsCount} Applicants
            </p>
          </div>
          <p className={`${textM} text-muted f12 ${program}`}>
            {ProgramTypes.keys[program]?.programName}
          </p>
        </Media.Body>
      </Media>
    </Container>
  );
}
