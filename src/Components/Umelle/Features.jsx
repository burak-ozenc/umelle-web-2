import  {lazy, useRef} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container,  Row} from "react-bootstrap";
import {AnimatePresence, m} from 'framer-motion';
import {Form, Formik} from 'formik';
import * as emailjs from "@emailjs/browser";

// Functions
import {fadeIn} from '../../Functions/GlobalAnimations';

// Components
import {ScrollToAnchor} from "../../Functions/Utilities";
import {Checkbox, Input, TextArea} from '../../Components/Form/Form'

// Data
import {ContactFormStyle03Schema} from "../../Components/Form/FormSchema";
import ReCAPTCHA from "react-google-recaptcha"
import {ContactFormStyle02Schema} from "../Form/FormSchema";

const Buttons = lazy(() => import('../../Components/Button/Buttons'))
const MessageBox = lazy(() => import('../../Components/MessageBox/MessageBox'))


const Features = (props) => {
    ScrollToAnchor();
    const form1 = useRef(null)
    const recaptcha = useRef()

    const sendEmail = (values) => {
        emailjs
            .send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_FEATURES_TEMPLATE_ID, values, {
                publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };

    return (<div>
        {/* Section Start */}
        <section className="py-[60px] lg:py-[120px] md:py-[80px] xs:py-[50px] bg-lightgray" {...fadeIn}>
            <Container>
                <Row className="m-auto">
                    <Col xl={12} lg={12} md={12}>
                        <Formik
                            initialValues={{name: '', email: '', phone: '', comment: '', recaptcha: ''}}
                            validationSchema={ContactFormStyle02Schema}
                            onSubmit={async (values, actions) => {
                                actions.setSubmitting(true)
                                const response = await sendEmail(values)
                                
                                // if (values.recaptcha !== '') {
                                //     const response = await sendEmail(values)
                                //     response.status === "success" && resetForm(actions, recaptcha);
                                // } else {
                                //     recaptcha.current.captcha.classList.add("error")
                                // }
                            }}
                        >
                            {({isSubmitting, status, setFieldValue}) => (
                                <Form ref={form1}>
                                    <Row>
                                        <Col xl={7} md={7} xs={7}>
                                            <Row className="bg-lightgray p-3 m-2">
                                                <h4 className="text-center" style={{color: '#902CFC'}}>
                                                    Features
                                                </h4>
                                                <Col xl={6} md={6} xs={6}>
                                                    <Checkbox type="checkbox" name="certificatesOfCoverage"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Certificates of Coverage
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="policyManagement"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Policy Management 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="vendorManagement "
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Vendor Management 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="iabilityPayroll"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Liability Payroll
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="claims"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Claims  
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="cntacts"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Contacts  
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="programs"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Programs   
                                                    </span>
                                                    </Checkbox>
                                                </Col>
                                                <Col xl={6} md={6} xs={6}>
                                                    <Checkbox type="checkbox" name="externalInternalCompliance"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        External/Internal Compliance 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="property"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Property   
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="standAlonePrograms "
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Stand Alone Programs 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="kPIsScorecards"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        KPIs/Scorecards 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="reportingAnalyticsDashboards "
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Reporting/Analytics/Dashboards 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="underwritingAndQuestionnaires "
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Underwriting and Questionnaires 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="otherFeatures"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Other
                                                    </span>
                                                    </Checkbox>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className="bg-lightgray p-3 m-2" xl={4} md={4} xs={4}>
                                            <h4 className="text-center" style={{color: '#902CFC'}}>
                                                Functions
                                            </h4>
                                            <Checkbox type="checkbox" name="automatedInvoicing " className="inline-block"
                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Automated Invoicing 
                                                    </span>
                                            </Checkbox>
                                            <Checkbox type="checkbox" name="programManagementWizard " className="inline-block"
                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Program Management Wizard 
                                                    </span>
                                            </Checkbox>
                                            <Checkbox type="checkbox" name="internalChat " className="inline-block"
                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Internal Chat 
                                                    </span>
                                            </Checkbox>
                                            <Checkbox type="checkbox" name="customBusinessSettings " className="inline-block"
                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Custom Business Settings 
                                                    </span>
                                            </Checkbox>
                                            <Checkbox type="checkbox" name="discountManagement " className="inline-block"
                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Discount Management 
                                                    </span>
                                            </Checkbox>
                                            <Checkbox type="checkbox" name="automatedCertificateRenewal " className="inline-block"
                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Automated Certificate Renewal 
                                                    </span>
                                            </Checkbox>
                                            <Checkbox type="checkbox" name="otherFunction" className="inline-block"
                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Other 
                                                    </span>
                                            </Checkbox>
                                        </Col>
                                    </Row>
                                    <Row className="row-cols-1 row-cols-md-1 mt-5">
                                        <Col className="mb-16 lg:mb-[25px] sm:mb-0">
                                            <Input showErrorMsg={false} type="text" name="name"
                                                   className="py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]"
                                                   labelClass="mb-[25px]" placeholder="Your name"/>
                                            <Input showErrorMsg={false} type="text" name="company"
                                                   className="py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]"
                                                   labelClass="mb-[25px]" placeholder="Your company"/>
                                            <Input showErrorMsg={false} type="email" name="email"
                                                   className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]"
                                                   labelClass="mb-[25px]" placeholder="Your email address"/>
                                            <Input showErrorMsg={false} type="tel" name="phone"
                                                   className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]"
                                                   labelClass="sm:mb-[25px]" placeholder="Your position"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={5}>
                                            {process.env.REACT_APP_GRECAPTCHA_API_KEY && (
                                                <ReCAPTCHA
                                                    ref={recaptcha}
                                                    className="mb-[35px]"
                                                    sitekey={process.env.REACT_APP_GRECAPTCHA_API_KEY}
                                                    onChange={(response) => {
                                                        setFieldValue("recaptcha", response)
                                                    }}
                                                />
                                            )}
                                        </Col>
                                        <Col xs={5}>
                                            <Buttons ariaLabel="form button" type="submit"
                                                     className={`font-medium font-serif rounded-none uppercase text-[11px]${isSubmitting ? " loading" : ""}`}
                                                     themeColor={["#0039e3", "#8600d4"]} size="md" color="#fff"
                                                     title="Free Quote"/>
                                            <AnimatePresence>
                                                {status && <m.div initial={{opacity: 0}} animate={{opacity: 1}}
                                                                  exit={{opacity: 0}}><MessageBox
                                                    className="mt-[35px] py-[10px] tracking-[1px]"
                                                    theme="message-box01"
                                                    variant="success"
                                                    message="Your message has been sent successfully!"/>
                                                </m.div>}
                                            </AnimatePresence>
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* Section End */}
    </div>)
}

export default Features