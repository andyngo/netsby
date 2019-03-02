import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import tachyons from 'tachyons-components'

const Heading = tachyons(`h1`)`
f4 mt0 mb0 fw4
`
const Title = tachyons(`h2`)`
f3 fw6 dark-gray mb1 mt0
`
const Description = tachyons(`p`)`
mid-gray mt0 f6 f5-ns
`
const ContainerTitle = tachyons(`div`)`
dn db-ns fl w-100 w-50-ns tl
`
const ContainerMain = tachyons(`div`)`
fl w-100 w-50-ns
`
const Section = tachyons(`div`)`
wrap w-100 vh-100 dt z-1
`
const Container = tachyons(`div`)`
cf v-mid dtc ph3 ph0-ns
`

export const IndexPageTemplate = ({
  title,
  description,
  content,
  contentComponent,
  primaryButton,
  secondaryButton,
  }) => {
  const PageContent = contentComponent || Content

  return (
    <Section>
      <Helmet
        bodyAttributes={{
            class: 'homepage'
        }}
      />
      <Container>
        <ContainerTitle>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </ContainerTitle>
        <ContainerMain>
          <Heading>Hi, I‘m Ajmal <span role="img" aria-label="emoji">👋🏼</span></Heading>
          <PageContent className="lh-copy content" content={content} />
          <Link to="/experience/" className="link br2 ph4 pv3 dib mr3-ns white bg-primary db w-auto-ns w-100 tc">{primaryButton}</Link>
          <Link to="/about/" className="link br2 ph4 pv3 mt2 dib blue bg-white tc w-auto-ns w-100 bg-secondary bs-secondary br-secondary">{secondaryButton}</Link>
        </ContainerMain>
      </Container>
    </Section>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        primaryButton={frontmatter.primaryButton}
        secondaryButton={frontmatter.secondaryButton}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        primaryButton
        secondaryButton
      }
    }
  }
`
