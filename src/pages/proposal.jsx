import React, { useState } from 'react'
import Layout from '../components/Layout'
import { MainSectionWrapper } from '../components/MainSectionWrapper'

export default function Proposal() {
    return (
        <Layout>
            <MainSectionWrapper>
                
                <div>
                    <h1 style={{ fontSize: '2em' }}>Supporting Positive Living for People with HIV</h1>
                    <video controls style={{width:"100%", marginBottom:'50px'}}>
                        <source src="/video/2021_kchef_hiv_program.mp4" type="video/mp4"/>
                    </video>

                    <h1 style={{ fontSize: '2em' }}>KCHEF Surgerial Services</h1>
                    <video controls style={{width:"100%", marginBottom:'50px'}}>
                        <source src="/video/2021_kchef_surgery.mp4" type="video/mp4"/>
                    </video>
                </div>
            </MainSectionWrapper>
        </Layout>
    )
}
