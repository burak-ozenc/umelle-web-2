import React, {useEffect, useState} from 'react'

// Libraries
import {m} from 'framer-motion'
import {Navbar, Col, Container, Row} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES} from '@contentful/rich-text-types';

// Components
import Blockquote from '../../../Components/Blockquote/Blockquote'
import {fadeIn} from '../../../Functions/GlobalAnimations'
// import Dropcaps  from '../../../Components/Dropcaps/Dropcaps'
import BlogClean from '../../../Components/Blogs/BlogClean'
import {Header, HeaderNav, Menu} from "../../../Components/Header/Header";

import SideButtons from "../../../Components/SideButtons";

// Data
import FooterMenu, {Footer} from "../../../Components/Footers/Footer";
import FooterData from '../../../Components/Footers/FooterData';
import {formatBlogDate, getBlogPost, getBlogPosts} from "../../../Functions/Utilities";
import headerimage from '../../../Assets/img/umelle/homepage_bottompagebanner_CTA_v2-01.png';

const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const PostLayout = (props) => {
    const [data, setData] = useState(null)
    // const [isDropcapsApplied, setDropcapsApplied] = useState(false);

    const {postID} = useParams();
    const [blogs, setBlogs] = useState(null);
    // Variable to track if Dropcaps has been applied
    // let isDropcapsApplied = false;
    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
        fetchData();
    }, [])


    const fetchData = async () => {
        try {
            //const data = await getBlogPosts()
            // console.log(data[0])

            // const duplicatedArray = new Array(3).fill(data[0]);

            // setBlogs(duplicatedArray)
            // console.log('blogs', duplicatedArray)
            const allPosts = await getBlogPosts();
            setBlogs(allPosts);
            console.log('blogs', allPosts);
        } 
        
        catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    

    // Rendering options for Contentful rich text
    const options = {
        renderNode: {
            
            [BLOCKS.HR]: () => <hr />,
            [INLINES.SOFT_BREAK]: () => <br/>  // Add line break rendering
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogData = await getBlogPost(postID);
                setData(blogData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [postID]);



    return (
         data && 
        (<div style={props.style}>

            {/* Header Start */}
            <Header topSpace={{md: true}} type="reverse-scroll">
                <HeaderNav fluid="fluid" theme="light" expand="lg"
                           className="py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0">
                    <Col lg={2} sm={6} xs={"auto"} className="mr-auto ps-0">
                        <Link aria-label="header logo" className="flex items-center" to="/">
                            <Navbar.Brand className="inline-block p-0 m-0">
                                <img className="default-logo" width="111" height="36"
                                     src='/assets/img/webp/umelle-logo.webp'
                                     data-rjs='/assets/img/webp/umelle-logo.webp' alt='logo'/>
                                <img className="alt-logo" width="111" height="36"
                                     src='/assets/img/webp/umelle-logo.webp'
                                     data-rjs='/assets/img/webp/umelle-logo.webp' alt='logo'/>
                                <img className="mobile-logo" width="111" height="36"
                                     src='/assets/img/webp/umelle-logo.webp'
                                     data-rjs='/assets/img/webp/umelle-logo.webp' alt='logo'/>
                            </Navbar.Brand>
                        </Link>
                    </Col>
                    <Navbar.Toggle className="order-last md:ml-[17px] w-[25px] min-h-[15px] inline-block align-middle">
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse className="justify-center col-auto col-lg-8">
                        <Menu {...props} />
                    </Navbar.Collapse>
                    <Col lg={2} xs={"auto"} className="justify-end pe-0 flex items-center"></Col>
                </HeaderNav>
            </Header>
            {/* Header End */}

            <SideButtons/>


            {/* Section Start */}
            <section
                className="pt-[130px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] pb-0 overflow-visible relative bg-lightgray px-[11%] lg:px-[4%]" backgroundImage={headerimage}>
                <Container fluid>
                    <Row>
                        <Col lg={6} className="order-2 z-10 pl-40 pb-[60px] lg:pl-12 md:pl-[15px]">
                            <div className="flex flex-col justify-center h-full">
                                <div className="font-serif text-fastblue uppercase font-medium mb-[30px] xs:mb-[10px]">
                                    {data.tags.map((item, i) =>{
                                        return(
                                    <span  className="text-fastblue hover:text-fastblue">{item}&nbsp;</span>
                                        )}
                                    )}
                                         {/*<span className="mx-[10px]">&#8226;</span>*/}
                                    {/*<Link aria-label="link" to="/blogs/blog-grid"*/}
                                    {/*      className="text-fastblue hover:text-fastblue">Creative</Link><span*/}
                                    {/*className="mx-[10px]">&#8226;</span>*/}
                                    {/*<Link aria-label="link" to="/blogs/blog-grid"*/}
                                    {/*      className="text-fastblue hover:text-fastblue">Freebies</Link><span*/}
                                    {/*className="mx-[10px]">&#8226;</span>*/}
                                    {/*<Link aria-label="link" to="/blogs/blog-grid"*/}
                                    {/*      className="text-fastblue hover:text-fastblue">events</Link>*/}
                                </div>
                                <h3 className="font-serif text-[3.4rem] font-medium tracking-[-1px] text-darkgray">
                                    {data.title}
                                </h3>
                                <span className="font-serif block my-[15px]">By <Link aria-label="link"
                                                                                      to="/blogs/blog-grid"
                                                                                      className="hover:text-fastblue">
                                    {data.author}
                                </Link> on <span>{formatBlogDate(data.date)}</span></span>
                            </div>
                        </Col>
                        <Col lg={6} className="px-0 order-1 self-end md:mb-[60px]">
                            <img width="" height="" className="rounded-lg mb-[-220px] md:mb-0"
                                 src={data.image.fields.file.url} alt=""/>
                        </Col>
                        <Col lg={6}
                             className="pl-36 whitespace-nowrap overflow-hidden right-0 text-[300px] leading-[300px] tracking-[-10px] bottom-[-110px] absolute font-serif font-semibold text-white sm:hidden">Blog</Col>
                    </Row>
                </Container>
            </section>
            {/* Seaction End */}

            {/* Section Start */}
            <section className="pt-[70px] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] sm:pt-[50px] relative">
                <Container>
                    <Row className="justify-end">
                        <Col xl={5} lg={6} className="pl-[3.5rem] md:pl-[15px]">
                            <p>{data?.description}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Seaction End */}

            {/* Section Start */}
            <section className="pb-[5px] overflow-hidden lg:pb-[90px] md:pb-[75px] sm:pb-[50px] mt-[75px] lg:mt-0">
                <Container>
                    <Row className="justify-center  ">
                        <m.div
                            className="col-12 col-md-6 bg-lightgray bg-no-repeat bg-right-bottom px-[90px] py-32 lg:px-[5.5rem]"
                            style={{backgroundImage: "url(/assets/img/webp/blog-post-layout-01-img-11.webp)"}} {...{
                            ...fadeIn,
                            transition: {delay: 0.2}
                        }} >
                            <Blockquote
                                animation={fadeIn}
                                theme="blockquote-style-04"
                                icon="fas fa-quote-left text-basecolor"
                                title={data.quote}
                                author={data?.quoteAuthor}
                            />
                        </m.div>
                        <m.div className="col col-md-6 bg-cover bg-center sm:h-[450px] xs:h-[300px]"
                               style={{backgroundImage: `url(${data?.quoteImage?.fields?.file?.url})`}} {...{
                            ...fadeIn,
                            transition: {delay: 0.6}
                        }}></m.div>
                    </Row>
                    <Row className="justify-center">
                        <Col md={10}>
                            <m.div className="row" {...fadeIn}>
                                <Col xl={12} className="mt-36 sm:mt-[50px]">
                                    {documentToReactComponents(data?.content,options)}
                                    
                                </Col>
                            </m.div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Seaction End */}
                

            {/* Section Start */}
            <m.section className="mb-20 md:py-[75px] sm:py-[50px]" {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <Col md={10}>
                            {/*{documentToReactComponents(data?.content2)}*/}
                            {documentToReactComponents(data?.content2)}
                            {/*<Dropcaps className="mb-[15px]" theme="dropcaps-style02"*/}
                            {/*          content={documentToReactComponents(data?.content2, renderOptions)}/>*/}
                            {/*//  content="lorem ipsum ..."/>*/}
                            {/*<ContentfulRenderer className="mb-[15px]" theme="dropcaps-style02" content={data} />*/}
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Seaction End */}
            

            {/* Section Start */}
            <section className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden">
                <Container className="sm:px-0">
                    <Row className="justify-center">
                        <Col lg={5} md={6} className="text-center mb-20">
                            <span className="font-serif font-medium uppercase inline-block">You may also like</span>
                            <h5 className="font-serif font-medium text-darkgray -tracking-[1px]">Related posts</h5>
                        </Col>
                    </Row>
                    {blogs &&
                        <BlogClean filter={false} overlay={["#0039e3", "#4132e0", "#5e28dd", "#741bd9", "#8600d4"]}
                                   pagination="false"
                                   grid="grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
                                   data={blogs?.slice(0, 3)}/>}
                </Container>
            </section>
            {/* Section End */}

            {/* Footer Start */}
            <Footer className="startup-footer bg-no-repeat bg-right" theme="light">
                <Container fluid className="xs:opacity-0 xs:hidden">
                    <Row>
                        <Col className="h-[65px] lg:h-[30px] bg-top bg-no-repeat"
                             style={{backgroundImage: "url(/assets/img/webp/home-startup-footer-shadow.webp)"}}>
                        </Col>
                    </Row>
                </Container>
                <div className="py-[4%] lg:py-[7%] md:py-[50px]">
                    <Container>
                        <Row md={4} className="justify-center gap-y-[25px]">
                            <FooterMenu data={Footer_Data} md={3} sm={6} className="xl:px-[15px]"
                                        titleClass="capitalize text-dark"/>
                        </Row>
                    </Container>
                </div>
            </Footer>
            {/* Footer End */}
        </div>
        )

    )
}

export default PostLayout