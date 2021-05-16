import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout, {cheraYellow} from '../components/Layout'
import { DonateButton } from '../components/DonateButton'
import Features from '../components/Features'
import { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { MainSectionWrapper } from '../components/MainSectionWrapper'
import { FullWidthImageHeader } from '../components/FullWidthImageHeader'
import { FaSchool } from "react-icons/fa";
import { IoIosTrendingUp, IoIosSchool } from "react-icons/io";

export const EducationPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
  content,
}) => {
  return (
    <div>
      <FullWidthImageHeader heading={heading} image={image} />
      <MainSectionWrapper>
        <div className="content">
          <div className="content">
            <div className="tile">
              <h1 className="title">{mainpitch.title}</h1>
            </div>
            <div className="tile">
              <p className="subtitle body-color-override">
                <strong>{mainpitch.description}</strong>
              </p>
            </div>
          </div>
          {/* intro */}
          <table className="table">
            <tbody>
              <tr style={{width: '100%', height: '100px'}}>
                  <td ><FaSchool size={50} color={cheraYellow}/></td>
                  <td className="is-size-4" style={{padding: '10px'}}>33% more likely to finish high school.</td>
              </tr>
              <tr style={{width: '100%', height: '100px'}}>
                  <td ><IoIosSchool size={50} color={cheraYellow}/></td>
                  <td className="is-size-4" style={{padding: '10px'}}>More likely to complete more than a year of additional education.</td>
              </tr>
              <tr style={{width: '100%', height: '100px'}}>
                  <td ><IoIosTrendingUp size={50} color={cheraYellow}/></td>
                  <td className="is-size-4" style={{padding: '10px'}}>35% more likely to have a professional job.</td>
              </tr>


            </tbody>
          </table>
          <Features gridItems={intro.blurbs} />
        </div>
        <div style={{ margin: '5rem' }}></div>
        {/* main */}
        <div className="columns">
          <div className="column is-16">
            <h3 className="has-text-weight-semibold is-size-3">
              {main.heading}
            </h3>
            <p>{main.description}</p>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child">
                  <PreviewCompatibleImage imageInfo={main.image1} />
                </article>
              </div>
            </div>
          </div>
        </div>
        <HTMLContent className="content" content={content} />
      </MainSectionWrapper>
    </div>
  )
}

EducationPageTemplate.propTypes = {
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

const EducationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <EducationPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        content={data.markdownRemark.html}
      />
    </Layout>
  )
}

EducationPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default EducationPage

export const pageQuery = graphql`
  query EducationPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "education-page" } }) {
      html
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
                fluid(maxWidth: 900, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
