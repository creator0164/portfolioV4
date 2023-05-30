import './article.css'
import Sidebar from "../../components/Sidebar"
import ParticlesBackground from "../../components/ParticlesBackground"
import ButtonSide from "../../components/ButtonSide"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useGetResourceByIdQuery } from "../../state/api"
const Article = () => {
    const {id} = useParams()
    const {isLoading, data} = useGetResourceByIdQuery(id);
    const [body, setBody] = useState('')
    useEffect(() => {
        if(!isLoading){
            setBody(data.body.replace(/(<img[^>]*)style="[^"]*"/g, '$1').replace(/src="([^"]+)"/g, 'src="https://gozonkeanulrich.azurewebsites.net$1"'))
        }
    }, [isLoading, data])
  return (
    <>
      <ParticlesBackground/>
        <Sidebar/>
        <div className="main-page">
            <div className="article container">
                <div className="super-title">Is Chromebook laptop worth it for programming?</div>
                {
                    isLoading ? (
                        <div class="meta">
                            <p id="date">Loading your article 🧙🏻‍♂️✨</p>
                        </div>
                    ):(
                        <>
                            <div className="meta">
                                <p id="date">Sun Sep 04 2022 - Kean Ulrich Gozon</p>
                            </div>
                            <div className="super-content" dangerouslySetInnerHTML={{ __html: body}}>
                            </div>
                        </>
                    )
                }
                
            </div>
        </div>
    <ButtonSide/>
    </>
  )
}

export default Article
