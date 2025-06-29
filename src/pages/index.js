import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import PostCard from "../components/PostCard/PostCard";
import * as styles from "./index.module.css";
import { Helmet } from "react-helmet";


const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
      <Layout>
        <Helmet>
          <title>My Static Blog</title>
          <meta name="description" content="read a blog" />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦄</text></svg>"></link>
        </Helmet>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Добро пожаловать в мой блог</h1>
          <p className={styles.heroDescription}>
            Здесь я делюсь своими мыслями, идеями и опытом в разработке
          </p>
        </div>

        <section className={styles.postsSection}>
          <h2 className={styles.sectionTitle}>Последние посты</h2>
          <div className={styles.postsGrid}>
            {posts.map(({ node }) => (
                <PostCard key={node.id} post={node} />
            ))}
          </div>
        </section>
      </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default IndexPage;
