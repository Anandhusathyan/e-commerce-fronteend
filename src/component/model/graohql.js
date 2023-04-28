import {GraphQLClient,gql} from "graphql-request";
export const graphcms=new GraphQLClient(process.env.REACT_API_KEY);
  
const category=`
id,
name,
slug,
color {css}
`

const comment=`
id,
name
email
comment
`
const post=`
id,
title,
slug,
coverPhoto {  url  },
content {  html  },
description,
createdAt,
updatedAt
`

export const QUERY_SLUG_CATEGORIES= gql`{
    category {
          name
          slug
        }
}`