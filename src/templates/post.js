import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import * as styles from "./post.module.css";

const PostTemplate = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <article className={styles.post}>
                <header className={styles.header}>
                    <Link to="/" className={styles.backLink}>
                        ← Назад к списку постов
                    </Link>
                    <h1 className={styles.title}>{post.frontmatter.title}</h1>
                    <div className={styles.meta}>
                        <time className={styles.date}>
                            {new Date(post.frontmatter.date).toLocaleDateString('ru-RU', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </div>
                </header>

                <div className={styles.content}>
                    <div
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </div>
            </article>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`;


export default PostTemplate;
