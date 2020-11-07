import { ApolloError, NetworkStatus } from "@apollo/client";
import React, { ReactElement, Ref } from "react";
import { Alert, Spinner } from "react-bootstrap";
import OppCard from "./OppCard";
import { dataSchemaObj, dataSchemaType } from "./OppTypes";
interface Props {
  refCarrier: Ref<any>;
  data: dataSchemaType;
  loading: boolean;
  error: ApolloError | undefined;
  networkStatus: NetworkStatus;
  totalPages: number;
  currentPage: number;
}

export default function OppContainer({
  loading,
  totalPages,
  currentPage,
  refCarrier,
  data,
  error,
}: Props): ReactElement {
  // console.log(data);
  if (error) {
    console.log(error);
    return <Alert variant="danger">An error has occured! Please refresh</Alert>;
  }
  return (
    <>
      {loading && <Spinner animation="grow" variant="primary" />}
      {data?.length > 0
        ? data.map((item: dataSchemaObj, index: number) => {
            return (
              <React.Fragment key={`${item.id} Fragment`}>
                <OppCard
                  description={item.description}
                  applicantsCount={item.applicants_count}
                  title={item.title}
                  id={item.id}
                  key={item.id}
                  durationType={item.opportunity_duration_type.duration_type}
                  location={item.location}
                  coverPhoto={item.cover_photo.url}
                  program={item.programme.short_name_display}
                  companyName={item.branch.company.name}></OppCard>
                {index === data.length - 1 || (
                  <hr className="w-100 my-2" key={`${item.id} hr`}></hr>
                )}
              </React.Fragment>
            );
          })
        : null}
      {data?.length > 0 && currentPage !== totalPages ? (
        <Spinner ref={refCarrier} animation="grow" variant="primary" />
      ) : null}
      {data?.length === 0 && (
        <Alert variant="warning">
          Looks like we're out of Opportunities! Try some other filter options
        </Alert>
      )}
    </>
  );
}
