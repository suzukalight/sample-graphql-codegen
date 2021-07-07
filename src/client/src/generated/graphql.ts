import gql from 'graphql-tag';
export type Maybe<T> = T | null;

export const GetUserName = gql`
    query GetUserName($id: ID!) {
  user: user(id: $id) {
    username
  }
}
    `;
export type GetUserNameQueryVariables = {
  id: Scalars['ID'];
};


export type GetUserNameQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username'>
  )> }
);

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  text: Scalars['String'];
  user: User;
  createdAt: Scalars['DateTime'];
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  edges: Array<Message>;
  pageInfo: PageInfo;
};

export type MessageCreated = {
  __typename?: 'MessageCreated';
  message: Message;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  signUp: Token;
  signIn: Token;
  deleteUser?: Maybe<Scalars['Boolean']>;
  createMessage: Message;
  deleteMessage: Scalars['Boolean'];
};


export type MutationSignUpArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationCreateMessageArgs = {
  text: Scalars['String'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  endCursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  me?: Maybe<User>;
  users?: Maybe<Array<User>>;
  user?: Maybe<User>;
  messages: MessageConnection;
  message: Message;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryMessagesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMessageArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
  messageCreated: MessageCreated;
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  messages?: Maybe<Array<Message>>;
  role?: Maybe<Scalars['String']>;
};
