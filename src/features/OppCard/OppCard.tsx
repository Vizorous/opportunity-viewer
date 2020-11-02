import React, { useEffect, useState } from "react";
import { Button, Container, Media } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
enum variantColorEnum {
  outlineDanger = "outline-danger",
  danger = "danger",
}
export default function OppCard({
  favorited,
  setFavorited,
}: {
  favorited: boolean;
  setFavorited: Function;
}) {
  const [variantColor, setVariantColor] = useState(
    variantColorEnum.outlineDanger
  );
  const isMobile: boolean = useMediaQuery({ maxWidth: 576 });
  useEffect(() => {
    if (favorited === true) {
      setVariantColor(variantColorEnum.danger);
    } else {
      setVariantColor(variantColorEnum.outlineDanger);
    }
  }, [favorited]);
  const allP: string = isMobile ? "p-2" : "p-3";
  const topP: string = isMobile ? "pt-3" : "pt-2";
  const sideP: string = isMobile ? "px-2" : "";
  const botM: string = isMobile ? "mb-1" : "mb-2";
  const textW: string = isMobile ? "" : "w-85";
  return (
    <Container className={`border ${allP} opp-card`}>
      <Button
        className="opp-card__save-btn"
        variant={variantColor}
        onClick={() => setFavorited(!favorited)}>
        {favorited && <i className="fas fa-heart"></i>}
        {!favorited && <i className="far fa-heart"></i>}
      </Button>
      <Media className="flex-wrap">
        <img
          className=" rounded mr-4"
          width={isMobile ? `100%` : `30%`}
          height="160px"
          style={{ objectFit: "cover" }}
          src="https://cdn-expa.aiesec.org/gis-img/gv_default.png"
          alt="Generic placeholder"
        />
        <Media.Body className={`${topP} ${sideP} `}>
          <div className="d-flex justify-content-between">
            <h5>Media Heading</h5>
          </div>
          <p className={`${botM} text-muted f14`}>
            Country Somewhere, 6 to 8 weeks
          </p>
          <p className={`${botM} ${textW}`}>
            {" "}
            Some descrption here fdssfds sdfgdsfsf sdf sdf sf sf sdsd f fsd fdsf
            sfd s s fs fds fs fs fs fsd fs fd sf sdf sdfs d fs f sf ds fs df{" "}
          </p>
          <div className="d-flex justify-content-between">
            <p className={`${botM} text-muted f14`}>Some other Details</p>
            <p className="${botM} text-muted f14 "> sdsfsdfsd</p>
          </div>
        </Media.Body>
      </Media>
    </Container>
  );
}
