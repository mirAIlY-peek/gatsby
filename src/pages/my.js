import * as React from "react"
import {graphql} from "gatsby";

const my = ({data}) =>{
    const { title, description, author } = data.site.siteMetadata;
    return (
        <div>
            <p>{author}</p>
            <p>{description}</p>
            <p>{title}</p>
        </div>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`;

export default my;
