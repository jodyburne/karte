import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Job = {
  __typename?: 'Job';
  dropoff?: Maybe<Address>;
  pickup?: Maybe<Address>;
};

export type Mutation = {
  __typename?: 'Mutation';
  job?: Maybe<Job>;
};


export type MutationJobArgs = {
  dropoff: Scalars['String'];
  pickup: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  geocode?: Maybe<Address>;
};


export type QueryGeocodeArgs = {
  address: Scalars['String'];
};

export type CreateJobMutationVariables = Exact<{
  pickup: Scalars['String'];
  dropoff: Scalars['String'];
}>;


export type CreateJobMutation = { __typename?: 'Mutation', job?: { __typename?: 'Job', pickup?: { __typename?: 'Address', address?: string | null, latitude?: number | null, longitude?: number | null } | null, dropoff?: { __typename?: 'Address', address?: string | null, latitude?: number | null, longitude?: number | null } | null } | null };

export type GetGeocodeQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetGeocodeQuery = { __typename?: 'Query', geocode?: { __typename?: 'Address', address?: string | null, latitude?: number | null, longitude?: number | null } | null };


export const CreateJobDocument = gql`
    mutation CreateJob($pickup: String!, $dropoff: String!) {
  job(pickup: $pickup, dropoff: $dropoff) {
    pickup {
      address
      latitude
      longitude
    }
    dropoff {
      address
      latitude
      longitude
    }
  }
}
    `;
export type CreateJobMutationFn = Apollo.MutationFunction<CreateJobMutation, CreateJobMutationVariables>;

/**
 * __useCreateJobMutation__
 *
 * To run a mutation, you first call `useCreateJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobMutation, { data, loading, error }] = useCreateJobMutation({
 *   variables: {
 *      pickup: // value for 'pickup'
 *      dropoff: // value for 'dropoff'
 *   },
 * });
 */
export function useCreateJobMutation(baseOptions?: Apollo.MutationHookOptions<CreateJobMutation, CreateJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJobMutation, CreateJobMutationVariables>(CreateJobDocument, options);
      }
export type CreateJobMutationHookResult = ReturnType<typeof useCreateJobMutation>;
export type CreateJobMutationResult = Apollo.MutationResult<CreateJobMutation>;
export type CreateJobMutationOptions = Apollo.BaseMutationOptions<CreateJobMutation, CreateJobMutationVariables>;
export const GetGeocodeDocument = gql`
    query GetGeocode($address: String!) {
  geocode(address: $address) {
    address
    latitude
    longitude
  }
}
    `;

/**
 * __useGetGeocodeQuery__
 *
 * To run a query within a React component, call `useGetGeocodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeocodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeocodeQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetGeocodeQuery(baseOptions: Apollo.QueryHookOptions<GetGeocodeQuery, GetGeocodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeocodeQuery, GetGeocodeQueryVariables>(GetGeocodeDocument, options);
      }
export function useGetGeocodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeocodeQuery, GetGeocodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeocodeQuery, GetGeocodeQueryVariables>(GetGeocodeDocument, options);
        }
export type GetGeocodeQueryHookResult = ReturnType<typeof useGetGeocodeQuery>;
export type GetGeocodeLazyQueryHookResult = ReturnType<typeof useGetGeocodeLazyQuery>;
export type GetGeocodeQueryResult = Apollo.QueryResult<GetGeocodeQuery, GetGeocodeQueryVariables>;