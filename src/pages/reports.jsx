import React, { useState } from 'react'
import Layout from '../components/Layout'
import { MainSectionWrapper } from '../components/MainSectionWrapper'


export const PdfLink = ({ href, children, styles }) => (
    <a href={href} target='_blank' >
        <button
            className='button is-medium is-primary is-outlined'
            style={{ display: 'block', margin: '5px,', ...styles }}
        >
            {children}
        </button>
    </a>
)

export default function Reports() {
    return (
        <Layout>
            <MainSectionWrapper>
                <h1 style={{ fontSize: '2em' }}> Health and Education Reports </h1>
                <h2> Download CHERA and KCHEF reports in PDF format </h2>

                <div>
                    <h3 >2023</h3>
                    <PdfLink href='/pdf/SMB_4_Year_Report-2309_2023.pdf'>Safe Motherhood in Busongora Report, 2018 through 2023</PdfLink>
                    <h3>2022</h3>
                    <PdfLink href='/pdf/Audit_report_2022-Signed_Copy.pdf'>2022 Audit Report</PdfLink>
                    <PdfLink href='/pdf/Annual-Report-2022.pdf'>2022 Annual Report</PdfLink>
                    <h3>2021</h3>
                    <PdfLink href='/pdf/Annual-Report-2021.pdf'>2021 Annual Report</PdfLink>
                    <PdfLink href='/pdf/Audit_report_2021_Signed.pdf'>2021 Signed Audit Report</PdfLink>
                    <PdfLink href='/pdf/Performance Update 210728.pdf'>2021 Performance Update (July)</PdfLink>
                    <h3>2020</h3>
                    <PdfLink href='/pdf/KCHEF-Annual-Report-2020.pdf'>2020 Annual Report</PdfLink>
                    <h3>2019</h3>
                    <PdfLink href='/pdf/Annual-Report-2019.pdf'>2019 Annual Report</PdfLink>
                    <h3>2018</h3>
                    <PdfLink href='/pdf/Executive-Summary_SAFE_MOTHERHOOD_2018.pdf'>
                        2018 Safe Motherhood in Busangora Report
                    </PdfLink>
                    <PdfLink href='/pdf/KCHEF_Annual_Report_2018.pdf'>2018 Annual Report</PdfLink>
                    <h3>2017</h3>

                    <PdfLink href='/pdf/2017-Annual-Report-171231.pdf'>2017 Annual Report</PdfLink>
                    <PdfLink href='/pdf/IFRS-Comparison-dollar (2017).pdf'>
                        2017 IFRS Comparison
                    </PdfLink>
                    <PdfLink href='/pdf/education/Summary-Report-September-2017.pdf'>
                        2017 September Education Report
                    </PdfLink>
                    <PdfLink href='/pdf/education/Quarterly-Report-2017-April.pdf'>
                        2017 April Education Report
                    </PdfLink>
                    <h3>2016</h3>
                    <PdfLink href='/pdf/health/KCHEF-2016-Clinic-Report.pdf'>
                        2016 Annual Health Clinic Report
                    </PdfLink>
                    <PdfLink href='/pdf/education/KCHEFEducationSept2016QuarterlyReport.pdf'>
                        2016 September Education Report
                    </PdfLink>
                    <PdfLink href='/pdf/education/Education-Program-Report-KCHEF-June-2016.pdf'>
                        2016 June Education Report
                    </PdfLink>

                    <h3>2015</h3>

                    <PdfLink href='/pdf/CHERA2015ReissuedReviewFinal.pdf'>
                        2015 Annual Report
                    </PdfLink>
                    <PdfLink href='/pdf/health/2015-Annual-Report-Clinic.pdf'>
                        2015 Annual Health Clinic Report
                    </PdfLink>
                    <PdfLink href='/pdf/education/Annual-Report-2015-Education.pdf'>
                        2015 Annual Education Report
                    </PdfLink>
                </div>
                <div></div>
            </MainSectionWrapper>
        </Layout>
    )
}
