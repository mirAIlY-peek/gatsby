---
title: "how GraphQL working in Gatsby"
date: "2024-02-20"
---

# Понимаем GraphQL в Gatsby

GraphQL — это язык запросов, который Gatsby использует для получения данных из Markdown, JSON, CMS и т.д.

## Почему это удобно?

- Ты получаешь только нужные поля
- Можно сортировать и фильтровать
- Автоматически создаётся GraphQL-схема

Пример простого запроса:

```graphql
query {
  site {
    siteMetadata {
      title
      author
    }
  }
}
