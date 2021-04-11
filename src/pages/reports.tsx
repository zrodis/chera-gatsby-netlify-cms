import { Link } from 'gatsby'
import React, { useState } from 'react'
import Layout from '../components/Layout'

interface PdfLinkProps {
    href: string
    children: React.ReactNode
}
const PdfLink = ({ href, children }: PdfLinkProps) => (
    <button
        className='button is-medium is-primary is-outlined'
        style={{ display: 'block', margin: '5px' }}
    >
        <a href={href}>{children}</a>
    </button>
)

export default function Reports() {
    return (
        <Layout>
            <section>
                <h1> Health and Education Reports </h1>
                <h2> Download CHERA and KCHEF Reports in PDF format </h2>
                <div>
                    <PdfLink href='/pdf/KCHEF-Annual-Report-2020.pdf'>2020 Annual Report</PdfLink>
                    <PdfLink href='/pdf/Annual-Report-2019.pdf'>2019 Annual Report</PdfLink>
                    <PdfLink href='/pdf/Executive-Summary_SAFE_MOTHERHOOD_2018.pdf'>
                        2018 Safe Motherhood in Busangora Report
                    </PdfLink>
                    <PdfLink href='/pdf/KCHEF_Annual_Report_2018.pdf'>2018 Annual Report</PdfLink>
                    <PdfLink href='/pdf/2017-Annual-Report-171231.pdf'>2017 Annual Report</PdfLink>
                    <PdfLink href='/pdf/IFRS-Comparison-dollar (2017).pdf'>
                        2017 IFRS Comparison
                    </PdfLink>
                    <PdfLink href='/pdf/CHERA2015ReissuedReviewFinal.pdf'>
                        2015 Annual Report
                    </PdfLink>
                </div>
            </section>
        </Layout>
    )
}
