import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import {DonateButton} from '../components/DonateButton'
import Features from '../components/Features'

export const HealthPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column'
        }}
      >
        <h1
          className="frontpage-header has-text-weight-bold"
          style={{fontSize:'3rem'}}
        >
          {heading}
        </h1>
        <h2
          className="frontpage-header has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
        >
          {
            subheading.split('[linebreak]').map(sh => {
              return <React.Fragment key={sh}> {sh}<br/></React.Fragment >
            })
          }
          
        </h2>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <p className="subtitle body-color-override"><strong>{mainpitch.description}</strong></p>
                  </div>
                </div>

                <Features gridItems={intro.blurbs} />


                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <DonateButton buttonProps={{className:"button is-large is-primary"}} />
                  </div>
                </div>

                <div className="column is-12 has-text-centered">
          
                  <Link  to="/about">

                  <button 
                      className='button is-medium is-primary is-outlined' 
                  >
                      {"Read more about us >"}
                  </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HealthPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const HealthPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HealthPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

HealthPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HealthPage

export const pageQuery = graphql`
  query HealthPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "health-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`