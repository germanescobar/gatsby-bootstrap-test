import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUVFxcVFxcXFxUVFRUXFxUXFxUVFxcYHSggHRolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAL0BCwMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAABAgMABAf/xAAlEAEBAQEAAQMEAgMBAAAAAAAAAQIREgMhURMxQWGR8HGB0fH/xAAZAQEBAQEBAQAAAAAAAAAAAAACAQMABAX/xAAdEQEBAQEBAAMBAQAAAAAAAAAAARECEiExUUFx/9oADAMBAAIRAxEAPwDx/JgkGvM+3JkYZGFDkaQ3AFDgyGhIeJWnI8BmkQhOHBkRpI0MHBiHI0gcM1iLhbkc5HI2O105/rcJxSBI7Vs0ky1bpeKFoAfhbFCwJWsYbHJnwTQcHQkzz5JYWqUsiyheSAawFZ2FsYYKjgRm40jnYMh4GYaZGteYwyNIfMG1rzzoeIjGsRpgcNI0HKFIMgHGZTWnkMweGkEdaTklg8Hh7Has5S8WyeweO13lPrbPcE45LLhQPwLgtZ3mp2BVfALHaN4qdZSwvF1LynY1yewIuheU+B4q8LV0LyThD6JYUZdl4YAulZ/EPweHkajrbwWDBGRCnIjB43EayDI3DZNwdaznS5g+IyGiac5LMmmT5h8wbWs4JMtMq+Js5H0c4T+m0yrKfKac5c/G4v8ATLY7U8pE1P0vM/JdLqXlDjL8C4/S+h8IWN4K84Xi6PhLUL4rbylfYpWXXOF8QuTRqrPInwvFNEsKVn1CWB4noWrrK8xK5C1StwtZXn8OPiaQ3GevXOCeLcVkLrKaV4CGmWkNM11p88saZ+TQ3iFrWcl8TzITKuINrXnkvBh2mR1rgzB7kcrTlG1ZE5htYX9LA+rPx/6Oq57PYlnx93Rwc+n8rq2OW4JfTde4lIso1zWD1fWUeFo4TRbFdYCrKljn0W5WuSX3OVjeScJqHsGxWdmohIalpsaXZYa0OKxv2WhwwcILNdEjcGMye3IMatlq4v4OYrCSGmhrTn4Nw3CyKTI1pAypA8fkZka0kN9xmeVT08wc57Q08bF/H96p9NvUz/z/AIb0fgbXVsywbn59lJAxjt/v8JrtLm8/H8tNT+VLhP1PT9kRP18/ZLw+yl7f9B2nFL4oXMW3aST5KI1ieofWiWVYlTqelvElhSs7Eukqlhbk2NidLYfYcKMbEuF4YSY5qdy0hq3sWh5W4aM3WT2ZIPGrQbUMFMFhsJS5UlUTyboVtD5z08pMU+INaQ+LL7f2rZiFytn7DVW19qjPufG4f08e/B+nRWepL+Cy2e5apRT6D0s/n5Hc9r/gefF+xN6cn3UsT3beIM1xP3pElu/BLn8un1JIjdUpXJ9g6hdz8/LdJCaiO9K70hTjLoKW02y6OMaSlowuqUY2lodbQGwtDRej0ZVZ/bpkMXgysnvGNxh6ij0cBFIlOD2nkLKaUK0hpDzSfkfA1pD5Vv2Jk4kGc9V8vf2/Sfjz8jiSJXOq8vtS3BZuGmviihKEnT2o6v8ApyqTH4GI5vKe32XHF9WITfupv1ULf0Ujg1preGkhdUhqVnyTZ6ndHGXRLpPWj2gcYdfJU7VNF4UZdJ6oDWNjS2B4mGO0fK/DRozJ7WN0tbrllw1NNENhDh4a0so0Th5RlT6bNTDldErXaN0fA4Wn6fE6l33WxUpabwbtgX1DZ1BdrX1i97E9wfS0uOPP2X1NextVPUdHaGfkvl0s1wIWJpbeFNfehqkFLupSm2n05GPV+W1Q6GrCXRSMuusHRKwapRjaVh6FpMgDrWlULXZNDan0ZWePZ6PKPSeRamL6xS0ZSTRo7FlPKfO0TQbGk6V6KXRzUw52r5mz6icHiYcq0vD59RzSj5Dhel+Nm+6XmbOnYWq9T8uX/AXf7DVTE1bzL5dqONBnS4mq6pNbLrXSrImjbS3RbsmoUjLrv8N5F0BbeljO9BonkOy048/V+Wui602qSUpGPXRpQoB1QvTaDoN5Ez10yjCN1nj1+lGCUeoet0cUlNmudL8nlbyJNDdJh+j9GVOaHOkwp1FemzpPppRxpKpI12nNj5Jhevw/kMS8h1p2L7UodS8j427HTvRt/IRtUt27HWw1pLsvQsKRlejbpbQnsXWlkDrr9a6L5NdFPGN6C0bSaDpYx9NpuD0tqhc+xJa10XqyM+uhgNKFUNdPQjWhdA9VputKS6bydjvanWlL0PJMX0p0sodDrsW9KwYlKPkmFO4uET+obO0xr7lo2qZqWq00mLO8q5STbfUTC9ytqnwTza7+FxJ1J8m3a3anaPk7E9TWtC7a7L5LgXr8rXTB0vSxnem1QG1O1Yztw1LpvILVxneozUvkF0WM/UG0G6HkoWs3W6PHJ/irNGoPSAMygPWCN1y6brRhQhtbpQjsX0aDNA0RYp1qUExp6N5NqhmBXJtwejNENFSWmjUsaIWhW61L+VZ24NrBwPJR39Eol0sGt0KFMrPdJawUCZ2iDRrHJaMC00hbHOsuP//Z" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
