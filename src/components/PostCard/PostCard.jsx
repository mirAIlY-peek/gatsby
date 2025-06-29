import React from "react";
import { Link } from "gatsby";
import * as styles from "./PostCard.module.css";

const PostCard = ({ post }) => {
    const { frontmatter, fields, excerpt } = post;

    return (
        <article className={styles.card}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    <Link to={fields.slug} className={styles.titleLink}>
                        {frontmatter.title}
                    </Link>
                </h2>
                <div className={styles.meta}>
                    <time className={styles.date}>
                        {new Date(frontmatter.date).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </div>
                <p className={styles.excerpt}>{excerpt}</p>
                <Link to={fields.slug} className={styles.readMore}>
                    Читать далее →
                </Link>
            </div>
        </article>
    );
};

export default PostCard;
