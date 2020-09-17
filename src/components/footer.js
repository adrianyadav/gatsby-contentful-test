import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import footerStyles from '../components/footer.css'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulFooter(children: {}) {
        title
        navLinks
      }
    }
  `)

  return (
    <footer className="footer">
      {/* {{ siteTitle }} */}
      <div className="footer-head-wrapper">
        <div className="footer-head">
          <div className="footer-head-content">
            <div className="footer-logo-container">
              <a
                rel="noopener"
                href="https://supervalu.ie/insurance/travel"
                target="_blank"
              ></a>
            </div>

            <nav className="footer-nav">
              <ul className="footer-nav-list footer-nav-list-first">
                <li className="footer-nav-heading">
                  {data.contentfulFooter.title}

                  {data.contentfulFooter.navLinks}
                </li>

                {data.contentfulFooter.navLinks.map((link) => {
                  return (
                    <li className="footer-nav-item">
                      <a
                        className="footer-nav-link link link--inverted"
                        target="_blank"
                      >
                        {link}
                      </a>
                    </li>
                  )
                })}
              </ul>
              <ul className="footer-nav-list">
                <li className="footer-nav-heading">About us</li>
                <li className="footer-nav-item">
                  <a
                    className="footer-nav-link link link--inverted"
                    target="_blank"
                  >
                    Terms of business (SuperValu)
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a
                    className="footer-nav-link link link--inverted"
                    target="_blank"
                  >
                    Terms of business (nib)
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a
                    className="footer-nav-link link link--inverted"
                    target="_blank"
                  >
                    Privacy policy
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a
                    className="footer-nav-link link link--inverted"
                    target="_blank"
                  >
                    Terms of use
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <hr className="footer-divider" />
        </div>
      </div>
      <div className="footer-content">
        <p className="footer-copy">
          ^ This travel premium will be reduced only when all insured persons
          are covered by a PMI policy for the full duration of their travel
          abroad. Proof of PMI cover will be required when claiming medical
          expenses to avoid a decline or a reduced settlement.
        </p>
        <p className="footer-copy">
          SuperValu Travel Insurance markets and promotes travel insurance
          products of nib Travel Services Europe Limited trading as nib Travel
          Services, 1st Floor, City Quarter, Lapps Quay, Cork, Ireland.
          SuperValu Financial Services DAC, t/a SuperValu Insurance is regulated
          by the Central Bank of Ireland. nib Travel Services Europe Limited
          trading as nib Travel Services is regulated by the Central Bank of
          Ireland.
        </p>
        <p className="footer-copy">
          nib Travel Services arrange, manage and administer our policies under
          a binding authority to act on behalf of the insurer, XL Insurance
          Company SE at 8 St Stephen's Green, Dublin 2 D02 VK30, Ireland. You
          should carefully read the Policy Wording which contains all terms,
          conditions, limits and exclusions and the Insurance Product
          Information Document (IPID) to make sure this insurance is right for
          you.
        </p>
        <div className="footer-provider"></div>
      </div>
    </footer>
  )
}

export default Footer
