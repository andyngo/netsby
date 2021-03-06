import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import tachyons from 'tachyons-components'

const PageContainer = tachyons('div')`
blog ph3 ph0-ns pv4-ns
`

const PageHeaderContainer = tachyons('div')`
wrap dt bb b--light-gray pb4 pt4 pt5-ns
`

const PageHeadingsContainer = tachyons('div')`
fl w-100 w-50-ns tl
`

const PageHeadings = tachyons('h2')`
f3 fw6 dark-gray mb1 mt0
`

const PageSubHeadings = tachyons('p')`
mid-gray mt0
`
const PageDescriptions = tachyons('div')`
fl w-100 w-50-ns lh-copy mb0
`

const SectionArticles = tachyons('div')`
w-100 dt mt4
`

const ArticleWrapper = tachyons('div')`
wrap
`

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <PageContainer>
          <PageHeaderContainer>
            <PageHeadingsContainer>
              <PageHeadings>
                Blog
              </PageHeadings>
              <PageSubHeadings>
                Personal learnings & thoughts
              </PageSubHeadings>
            </PageHeadingsContainer>
            <PageDescriptions>
              I enjoy writing down and reflect on my experience. My goal is to write more about design, frontend and anything in between.
            </PageDescriptions>
          </PageHeaderContainer>
          <SectionArticles>
            <ArticleWrapper>
              {posts
                .map(({ node: post }) => (
                  <div className="w-70-ns mb4 mb5-ns" key={post.id}>
                    <h3 className="lh-title mb1 blue mt0">
                      <Link className="link fw6" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    <p className="lh-copy mt1 mb2">
                      {post.excerpt}
                    </p>
                    <small className="mid-gray lh-copy">{post.frontmatter.date}{post.frontmatter.author}</small>
                  </div>
                ))}
            </ArticleWrapper>
          </SectionArticles>
        </PageContainer>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
