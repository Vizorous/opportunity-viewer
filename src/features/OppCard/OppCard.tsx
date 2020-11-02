import React, { useContext, useEffect, useMemo, useState } from "react";
import { Button, Container, Media } from "react-bootstrap";
import { useResponsiveContext } from "../../App";
import LikeButton from "../../components/LikeButton/LikeButton";

const responsiveResizes = (isMobile: boolean) => {
  const containerP: string = isMobile ? "p-2" : "p-3";
  const textContainerP: string = isMobile ? "pt-3 px-2" : "pt-2";
  const textM: string = isMobile ? "mb-1" : "mb-2";
  const textW: string = isMobile ? "" : "w-85";
  return { containerP, textContainerP, textM, textW };
};

interface OppCardProps {
  favorited: boolean;
  setFavorited: Function;
}
export default function OppCard({ favorited, setFavorited }: OppCardProps) {
  const { isMobile } = useResponsiveContext();
  const { containerP, textContainerP, textM, textW } = useMemo(
    () => responsiveResizes(isMobile),
    [isMobile]
  );

  return (
    <Container className={`border ${containerP} opp-card`}>
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
          src="https://cdn-expa.aiesec.org/gis-img/gv_default.png"
          alt="Generic placeholder"
        />
        <Media.Body className={`${textContainerP}`}>
          <div className="d-flex justify-content-between">
            <h5>Media Heading</h5>
          </div>
          <p className={`${textM} text-muted f14`}>
            Country Somewhere, 6 to 8 weeks
          </p>
          <p className={`${textM} ${textW}`}>
            {" "}
            Some descrption here fdssfds sdfgdsfsf sdf sdf sf sf sdsd f fsd fdsf
            sfd s s fs fds fs fs fs fsd fs fd sf sdf sdfs d fs f sf ds fs df{" "}
          </p>
          <div className="d-flex justify-content-between">
            <p className={`${textM} text-muted f14`}>Some other Details</p>
            <p className={`${textM} text-muted f14`}> sdsfsdfsd</p>
          </div>
        </Media.Body>
      </Media>
    </Container>
  );
}
