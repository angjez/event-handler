import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
};

export type AddEventInput = {
  date: Scalars["DateTime"];
  email: Scalars["String"];
  name: Scalars["String"];
  surname: Scalars["String"];
};

export type AddEventResponse = EventSuccessfulAddedResponse;

export type EventSuccessfulAddedResponse = {
  __typename?: "EventSuccessfulAddedResponse";
  message: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  addEvent: AddEventResponse;
};

export type MutationAddEventArgs = {
  input: AddEventInput;
};

export type Query = {
  __typename?: "Query";
  healthCheck: Scalars["Boolean"];
};

export type AddEventMutationVariables = Exact<{
  input: AddEventInput;
}>;

export type AddEventMutation = {
  __typename?: "Mutation";
  addEvent: { __typename: "EventSuccessfulAddedResponse"; message: string };
};

export const AddEventDocument = gql`
  mutation addEvent($input: AddEventInput!) {
    addEvent(input: $input) {
      __typename
      ... on EventSuccessfulAddedResponse {
        message
      }
    }
  }
`;
export type AddEventMutationFn = Apollo.MutationFunction<
  AddEventMutation,
  AddEventMutationVariables
>;

/**
 * __useAddEventMutation__
 *
 * To run a mutation, you first call `useAddEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEventMutation, { data, loading, error }] = useAddEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddEventMutation,
    AddEventMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddEventMutation, AddEventMutationVariables>(
    AddEventDocument,
    options,
  );
}
export type AddEventMutationHookResult = ReturnType<typeof useAddEventMutation>;
export type AddEventMutationResult = Apollo.MutationResult<AddEventMutation>;
export type AddEventMutationOptions = Apollo.BaseMutationOptions<
  AddEventMutation,
  AddEventMutationVariables
>;
