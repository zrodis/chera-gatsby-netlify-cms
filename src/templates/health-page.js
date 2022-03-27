import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Layout, { cheraYellow } from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Features from '../components/Features'
import { MainSectionWrapper } from '../components/MainSectionWrapper'
import { FullWidthImageHeader } from '../components/FullWidthImageHeader'
import { FaShieldAlt, FaArrowDown, FaUsers, FaUserMd } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { PdfLink } from '../pages/reports'

export const HealthPageTemplate = (props) => {
  const {
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
    main,
    content,
  } = props

  console.log('props', props)

  return (
    <div>
      <FullWidthImageHeader heading={heading} image={image} />
      <MainSectionWrapper>
 
        <div className="content">
          <div className="tile">
              <h3 className="title">{"Dental Clinic"}</h3>
          </div>
          <div className="tile">
            The new Dental Clinic is making great progress! 
          </div>
          <div className="tile">
            <div style={{display:'flex', justifyContent: 'center', margin: '15px', marginBottom: '80px'}}>
              <PdfLink href='/pdf/Dental Report 2022.docx'>Click here for the full report.</PdfLink>

            </div>

          </div>         
          <div className="tile">
              <h3 className="title">{"The KCHEF staff extends thanks to St. Anne's Episcopal Church, Annapolis, for their extremely generous donation!"}</h3>
          </div>         
          <video controls style={{width:"100%", marginBottom:'50px'}} poster="/video/2021_chera_thankyou_poster.png">
            <source src="/video/2021_chera_thankyou.mp4" type="video/mp4"/>
          </video>
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
                  <td ><FaArrowDown size={50} color={cheraYellow}/></td>
                  <td className="is-size-4" style={{padding: '10px'}}><strong>Reduces</strong> unnecessary loss of life</td>
              </tr>
              <tr style={{width: '100%', height: '100px'}}>
                  <td ><FaShieldAlt size={50} color={cheraYellow}/></td>
                  <td className="is-size-4" style={{padding: '10px'}}><strong>Protects</strong> the health of infants and children</td>
              </tr>
              <tr style={{width: '100%', height: '100px'}}>
                  <td ><IoIosTrendingUp size={50} color={cheraYellow}/></td>
                  <td className="is-size-4" style={{padding: '10px'}}><strong>Increases</strong> the likelihood that children will complete their education</td>
              </tr>
              <tr style={{width: '100%', height: '100px'}}>
                  <td ><FaUsers size={50} color={cheraYellow}/></td>
                  <td className="is-size-4" style={{padding: '10px'}}><strong>Strengthens</strong> the economy of the community</td>
              </tr>
              <tr style={{width: '100%', height: '100px'}}>
                  <td ><FaUserMd size={50} color={cheraYellow}/></td>
                  <td className="is-size-4" style={{padding: '10px'}}><strong>Reduces</strong> the numbers of orphans, and attendant risks, including early pregnancy and HIV infection</td>
              </tr>

            </tbody>
          </table>
          <div className="content">
            <div className="tile">
                <h3 className="title">{"Supporting Positive Living for People with HIV"}</h3>
            </div>         
            <video controls style={{width:"100%", marginBottom:'50px'}}>
                <source src="/video/2021_kchef_hiv_program.mp4" type="video/mp4"/>
            </video>
          
          </div>
          <Features gridItems={intro.blurbs} />
        </div>
        <div style={{ margin: '5rem' }}></div>
        {/* main */}
        <div className="columns">
          <div className="column is-16">
            <h3 className="has-text-weight-semibold is-size-3">
              {main.heading}
            </h3>
           <div style={{display:'flex', justifyContent: 'center', margin: '15px'}}>
            <PdfLink href='/pdf/Performance Update 210728.pdf'>View the 2021 Performance Update Report</PdfLink>

            </div>
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
              <div className="tile is-parent">
                <article className="tile is-child">
                  <PreviewCompatibleImage imageInfo={main.image2} />
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child">
                <PreviewCompatibleImage imageInfo={main.image3} />
              </article>
            </div>
          </div>
        </div>
        <HTMLContent className="content" content={content} />
      </MainSectionWrapper>
    </div>
  )
}

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
  main: PropTypes.any,
  content: PropTypes.any,
}

const HealthPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter

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
        main={frontmatter.main}
        content={data.markdownRemark.html}
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
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
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
