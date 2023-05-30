import './portfolio.css'
import Sidebar from "../../components/Sidebar";
import ButtonSide from "../../components/ButtonSide";
import ParticlesBackground from "../../components/ParticlesBackground";
import { useGetPortfolioQuery } from "../../state/api";
import { Link } from "react-router-dom";
const Portfolio = () => {
    const {isLoading, isError, data} = useGetPortfolioQuery();
  return (
    <>
    <ParticlesBackground/>
    <Sidebar/>
    <div className="main-page">
        <div className="portfolio container">
            <div className="title-section">
                <div className="two-rows sec-title">
                    <h1>Portfolio</h1>
                </div>
                <div className="two-rows search">
                    <input className="search-inputs" type="search" name="search" placeholder="Search Projects" />
                </div>
            </div>
            {
                isLoading ? (
                    <div className="project-container">
                        <p style={{textAlign: 'center'}}>Loading ...</p>
                    </div>
                ):
                isError ? (
                    <p style={{textAlign:'left'}}>Apologies, an error occurred while loading the portfolio. Please try again later or contact the administrator for assistance.</p>
                ): 
                (
                    data.length < 1 ? (
                        <p style={{textAlign:'left'}}>Currently, no projects are available, but new projects are being added regularly. If you wish to add your project, click the <Link to={'/contact'}>"contact"</Link> link.</p>
                    ):
                    (
                        data.map((item, index) => (
                            <div key={index} className="project">
                                <a className="link" rel="noreferrer" target="_blank" href={item.link}>
                                    <img src={item.thumbnail} alt="projectImg" />
                                    <h3 className="project-title">{item.headline}</h3>
                                    <p>{item.sub_headline}</p>
                                </a>
                            </div>
                        ))
                    )
                )
            }
            
        </div>
    </div>
    <ButtonSide/>
    </>
  )
}

export default Portfolio
