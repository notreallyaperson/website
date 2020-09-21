import React, { Fragment } from 'react'

const CustomerList = props => {
    const customers = [
        {
            src: require("assets/img/companies/magnus.png"),
            link: "https://www.magnusgamesstudio.com/",
        },
        {
            src: require("assets/img/companies/JTK Logo.png"),
            link: "http://jtkconsult.com.my/",
            style: {height: '50px'}
        },
        {
            src: require("assets/img/companies/Trees.png"),
            link: "https://www.trees.org.my/home",
        },
        {
            src: require("assets/img/companies/FoBK.png"),
            link: "https://f0bk.wordpress.com/",
        },
        {
            src: require("assets/img/companies/bangsawan-logo.png"),
            link: "https://bangsawan.com.sg/",
        },
        {
            src: require("assets/img/companies/Pangean.png"),
            link: "https://thepangean.com/",
        }
    ]

    return (
        <Fragment>
            <p style={{ fontWeight: '500', fontSize: '20px' }}>Our Customers</p>
            <table style={{ display: 'block', width: '100%', overflowX: 'auto', paddingBottom: '15px', marginTop: '30px' }}>
                <tbody>
                    <tr>
                        {customers.map(customer => <td style={{ justifyContent: 'center', alignItems: "center"}}>
                            <a href={customer.link} target='_blank'>
                                <img
                                    alt="..."
                                    src={customer.src}
                                    style={{ maxHeight: '60px', maxWidth: '200px', margin: '10px', ...customer.style}}
                                />
                            </a>
                        </td>)}
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default CustomerList