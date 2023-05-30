import './resources.css'
import Sidebar from "../../components/Sidebar";
import ButtonSide from "../../components/ButtonSide";
import ParticlesBackground from "../../components/ParticlesBackground";
import {useGetResourceQuery} from '../../state/api'
import {Link} from 'react-router-dom'
const Resources = () => {
    const {isLoading, isError, data} = useGetResourceQuery();
    console.log(isLoading?'':data[0].body)
  return (
    <>
      <ParticlesBackground/>
      <Sidebar/>
        <div className="main-page">
            <div className="portfolio container">
                <div className="title-section">
                    <div className="two-rows sec-title">
                        <h1>Resources</h1>
                    </div>
                    <div className="two-rows search">
                        <input className="search-inputs" type="search" name="search"  placeholder="Search Resources"/>
                    </div>
                </div>
                {
                    isLoading ? (
                        <div className="project-container">
                            <p style={{textAlign: 'center'}}>Loading ...</p>
                        </div>
                    ):
                    isError ? (
                        <p style={{textAlign:'left'}}>Apologies, an error occurred while loading the resources. Please try again later or contact the administrator for assistance.</p>
                    ): 
                    (
                        data.length < 1 ? (
                            <p style={{textAlign:'left'}}>There are no available resources or articles, but new ones are being added regularly. If you want to contribute your own resource or article, please click the <Link to={'/contact'}>"contact"</Link> link.</p>
                        ):
                        (
                            data.map((item, index) => (
                                <div key={index} className="resources-container">
                                    <a className="link" rel="noreferrer" target="_blank" href={item.link}>
                                        <div className="img-container">
                                            <img src={item.thumbnail} alt="resourceImg" />
                                        </div>
                                        <div className="context">
                                            <h2 className="article-title">{item.headline}</h2>
                                            <p>{item.sub_headline}</p>
                                        </div>
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

export default Resources
