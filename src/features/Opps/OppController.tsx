import { NetworkStatus, useQuery, useReactiveVar } from "@apollo/client";
import Joi from "joi";
import React, { ReactElement, useEffect, useMemo, useRef } from "react";
import { Container } from "react-bootstrap";
import { durationVar, programVar, startDateVar } from "../../cache";
import { useResponsive } from "../../utils/customHooks";
import OppCard from "./OppCard";
import OppContainer from "./OppContainer";
import { getAllOpportunities, passedVariables } from "./OppOperations";
import { dataSchema } from "./OppTypes";
import useVisibilitySensor from "@rooks/use-visibility-sensor";

interface Props {}

export default function OppController(): ReactElement {
  const infiniteScrollSpinner = useRef(null);
  const { isVisible, visibilityRect } = useVisibilitySensor(
    infiniteScrollSpinner,
    {
      intervalCheck: true,
      scrollCheck: true,
      resizeCheck: true,
    }
  );
  const { isLG, isXS } = useResponsive();
  const duration = useReactiveVar(durationVar);
  const program = useReactiveVar(programVar);
  const startDate = useReactiveVar(startDateVar);
  const oppCardLength = isXS ? "" : isLG ? "w-90" : "w-80";
  const variables = useMemo(
    () => passedVariables(startDate, duration, program),
    [startDate, duration, program]
  );

  const { loading, error, data, networkStatus, fetchMore } = useQuery(
    getAllOpportunities,
    {
      variables: variables,
      notifyOnNetworkStatusChange: true,
    }
  );
  // console.log(data, "sdsd");

  const dataArray = data?.allOpportunity?.data;
  const validatedDataArray = dataSchema.validate(dataArray, {
    stripUnknown: true,
  });
  const paging = data?.allOpportunity?.paging;
  // console.log(dataArray, validatedDataArray, paging);
  const currentPage = paging?.current_page as number;
  const totalPages = paging?.total_pages as number;

  useEffect(() => {
    if (isVisible === true) {
      console.log(currentPage + 1);
      fetchMore({
        variables: { page: currentPage + 1 },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          console.log(prevResult);
          console.log(fetchMoreResult);
          fetchMoreResult.allOpportunity.data = [
            ...prevResult.allOpportunity.data,
            ...fetchMoreResult.allOpportunity.data,
          ];
          return fetchMoreResult;
        },
      });
    }
  }, [isVisible]);

  return (
    <Container
      fluid="md"
      className={`p-3 ${oppCardLength} d-flex align-items-center justify-content-center flex-column`}
      style={{ marginTop: "100px" }}>
      <OppContainer
        totalPages={totalPages}
        currentPage={currentPage}
        refCarrier={infiniteScrollSpinner}
        loading={loading}
        error={error}
        data={validatedDataArray.value}
        networkStatus={networkStatus}></OppContainer>
    </Container>
  );
}
