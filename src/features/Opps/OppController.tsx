import { NetworkStatus, useQuery, useReactiveVar } from "@apollo/client";
import Joi from "joi";
import React, { ReactElement, useMemo } from "react";
import { Container } from "react-bootstrap";
import { durationVar, programVar, startDateVar } from "../../cache";
import { useResponsive } from "../../utils/customHooks";
import OppCard from "./OppCard";
import OppContainer from "./OppContainer";
import { getAllOpportunities, passedVariables } from "./OppOperations";
import { dataSchema } from "./OppTypes";

interface Props {}

export default function OppController(): ReactElement {
  const { isLG, isXS } = useResponsive();
  const duration = useReactiveVar(durationVar);
  const program = useReactiveVar(programVar);
  const startDate = useReactiveVar(startDateVar);
  const oppCardLength = isXS ? "" : isLG ? "w-90" : "w-80";
  const variables = useMemo(
    () => passedVariables(startDate, duration, program),
    [startDate, duration, program]
  );

  const { loading, error, data, networkStatus } = useQuery(
    getAllOpportunities,
    {
      variables: variables,
      notifyOnNetworkStatusChange: true,
    }
  );
  const dataArray = data?.allOpportunity?.data;
  const validatedDataArray = dataSchema.validate(dataArray, {
    stripUnknown: true,
  });

  console.log(dataArray, validatedDataArray);
  return (
    <Container
      fluid="md"
      className={`p-3 ${oppCardLength} d-flex align-items-center justify-content-center flex-column`}
      style={{ marginTop: "100px" }}>
      <OppContainer
        loading={loading}
        error={error}
        data={validatedDataArray.value}
        networkStatus={networkStatus}></OppContainer>
    </Container>
  );
}
