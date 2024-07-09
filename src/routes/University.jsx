import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Brudcrubs from "../components/Brudcrubs";

const University = () => {
  const [universityDetails, setUniversityDetails] = useState([
    {
      id: 1,
      name: "DAVID TVILDIANI MEDICAL UNIVERSITY (DTMU)",
      describe:
        "David Tvildiani Medical University was founded in Tbilisi, Georgia in 1989 and is one of the first non-governmental academic institutions to have initiated medical education in Georgia. The mission is to provide higher education in medicine that is based on science and best international practices. The study programs are composed in full accordance with US Medical Licensing Examination (USMLE) requirements.",
      describe2:
        "Clinical study is conducted in the leading modern well-equipped partner hospitals in Georgia.",
      describe3:
        "A large number of the graduates have already completed or are currently doing the residency or other proficiency courses, working as physicians in prominent USA and European Universities and Clinics. ",
      describe4:
        "The absolute majority of the graduates have been employed in the professional field, while many more successfully passed the international exams (USMLE, PLAB, MCI) and are currently developing their skills at clinics and research centers of the USA, Germany, Britain, Sweden and other countries. A number of the graduates have returned to the School as proficient teachers. Some have earned their PhD degree.",
      describe5:
        "AIETI Medical School of David Tvildiani Medical University has been recognized by the WHO (World Health Organization) and is listed in the WHO AVICENNA Directory for medicine, it is a member of the Association for Medical Education in Europe (AMEE), Association of Medical Schools in Europe (AMSE) and Organization for PhD Education in Biomedicine and Health Sciences in the European System (ORPHEUS).",

      fee: "6000",
      course: "MD-(USMLE Based)",
      Year: "6",
      CollegeImage: "",
      img: "img/video-img.jpg",
      video:
        "https://www.youtube.com/embed/kYGCxNUTozI?si=wEZc_8nDJCgUNRVK?autoplay=1",
    },
    {
      id: 2,
      name: "GEORGIAN NATIONAL UNIVERSITY (SEU)",
      describe:
        "Established in 2001, Georgian national umiver SEU is a private institution that attracts several international students who aspire to pursue MBBS abroad.",
      describe2:
        "The university has grown swiftly over the years , becoming one of the top world ranking universities for medical education in Georgia. It offers great educational infrastructure , accomplished faculty and is up to date with all modern technologies to give the students the best educational experience possible with international standards.",
      describe3:
        "The university is an ideal option for indian students seeking variety in the syllabus and exposure to the latest technology.",
      describe4:
        "Georgian National University SEU is successfully recognised by NMC , WHO , WME , ECMG , FAIMER , MCG.",
      describe5:
        "Though the medium of instruction in classroom is english , students who wish to pursue MBBS from SEU need not to appear for any english language proficiency test.",
      describe6:
        "Many international students pursue MBBS course in this university of repute because of high standard education, excellent culture, food, accommodation, secure and safe environment, course in English language and all things in a nut shell made this medical school of the best in the world and certainly the one in Georgia.",
      fee: "5500",
      course: "MD",
      Year: "6",
      CollegeImage: "",
    },
    {
      id: 3,
      name: "CAUCASUS INTERNATIONAL UNIVERSITY (CIU)",
      describe:
        " Caucasus International University was founded as a medical institute in 1995 and located in Tbilisi, Georgia. The university attracts more foreign university entrants and students for doing MBBS.",
      describe2:
        "Caucasus International University has numerous and highly qualified alumni. Currently, more than 700 medical students are coming from various countries and the number of students is increasing per term.",
      describe3:
        "Caucasus International University creates a modern learning and teaching atmosphere by implementing the innovative methodology in the education system, as well as through intercultural education and diverse university life.",
      describe4:
        "The University has all the innovative labs and libraries along with modern infrastructure.",
      describe5:
        "Across the globe, the university has setup partnership with number of Universities.It facilitates the education system at international level.",
      describe6:
        "The medical education provided by the Universities meet the international standards.",
      describe7: "All the staff is highly qualified and well-experienced.",
      describe8:
        "The students will get an opportunity to work with the specialized hospitals which are already affiliated.",
      fee: "6000",
      Year: "6",
      CollegeImage: "",
      course: "MD",
      fee2: "5000",
      Year2: "5",
      course2: "Dentistry",
    },
    {
      id: 4,
      name: "Caucasus university (CU)",
      describe:
        " Caucasus University (CU) is one of the most prominent Higher Education Institutions in Georgia and Eastern Europe.",

      describe2:
        "Currently, Caucasus University has 10 schools (faculties): the School of Business (CSB), the School of Law (CSL), the School of Media (CSM), the School of Technology (CST), the School of Governance (CSG), the School of Humanities and Social Sciences (CSH), the School of Tourism (CTS), the School of Medicine and Healthcare Management (CMS), the School of Economics (CES) and the School of Education (CES).",
      describe3:
        "Caucasus University offers its students a high-quality education which is provided by professionals with high academic qualifications and practical experience and through efficient educational processes. ",
      describe4:
        " The aim of Caucasus University is to prepare professionals committed to the values of democracy and ethical norms and in this way contribute to society’s progress and knowledge-sharing.",
      describe5:
        "The University is a member of many successful international university associations and professional networks.  CU is an Individual Full Member of European Unievsrity Asscociation (EUA), is a member PRIME, CEEMAN, AACSB, IAUP, IAU, NIBES, ELFA, BSUM, WAAS, Amcham, United Nations Academic Impact (UNAI) etc.",
      Year: "6",
      CollegeImage: "",
      course: "MD",
      fee: "6000",
    },
    {
      id: 5,
      name: "UNIVERSITY OF GEORGIA (UG)",
      describe:
        "Founded in 2004, The University of Georgia was first named under ”Georgian University of Social Sciences”. It is one of the largest private universities in Tbilisi, Georgia.",
      describe2:
        "Their Medical Programmes are recognized worldwide. under supervision of qualified mentors, Practical training is provided by the best multipurpose clinics of the Health system. The University is also a member of the Bologna Process as well as is recognized in Europe and the USA.",
      describe3:
        "The University of Georgia is a substantial college, which owns the 4th position on the countrywide level. Currently more than 6000 local and international students are pursuing the University of Georgia. It gives distinctive quality training and ambitions to increase extraordinary skills for the future. With superior educational Universitys, the college enriches their student’s skills. The college gives a group of outstanding faculties, who guide the scholars during the academic tenure.",
      describe4:
        "Recognition and Accreditations - NMC, WHO, WFME, ECFMG, FAIMER, MCC",
      describe5:
        "The students across the globe seeking to pursue their career in the university of Georgia must go through the below mentioned points:  ",
      describe6:
        "Simulation Hospital is one of the exceptional multi-profile simulation laboratories in Georgia.",
      describe7:
        "Cooperates with the European and US main universities and gives trade programs of numerous European Universities to the students for one semester or a year.",
      describe8:
        "The University has trade programs inside individual cooperation, Erasmus mundus and Erasmus+.",
      describe9:
        "The University of Georgia carries out numerous types of International scientific research projects together with the Tempus program funded through the European Union",
      describe10:
        "It is one of the leading provider of Medical Education in Georgia for Graduates and Undergraduates",
      describe11: "Top notch education centers for the students.",
      describe12: "Safe and attractive surroundings for all.",
      fee: "6000",
      Year: "6",
      CollegeImage: "",
      course: "MD",
      fee2: "5500",
      Year2: "5",
      course2: "Dentistry",
    },
    {
      id: 6,
      name: "EUROPEAN UNIVERSITY (EU)",
      describe: "European Teaching University  was founded in  1995.",
      describe2:
        "European Teaching  University is staffed by qualified, experienced academic staff and invited specialists, who were educated in the leading universities in Europe, which contributes to the international experience and high-quality, innovation-based learning.",
      describe3:
        "Institution is completely focused on students, it  gives ability ,together with high-quality education, university grants and studying  abroad.",
      describe4:
        "European University is equipped with modern technological base, a diverse library, their own television and  with the essential equipment  for appropriate   programs, which provides all the conditions for a quality education.",
      describe5:
        "Many foreign  students studying at the  institution, including the Ukraine, India, Azerbaijan, Pakistan, etc.",
      describe6:
        "The European University is a higher education institution in Tbilisi, Georgia. At this stage, the university owns two educational buildings and a modern dormitory. It is home to three faculties and 15 academic degree programs, serving up to 3500 students from more than 70 countries.",
      describe7:
        "The European University successfully collaborates with leading higher education institutions locally and in Europe, Asia and US. It is an individual associate member of EUA, an institutional member of GUNi, an academic member of ACM and a member of AMEE, EAIE, AMSE and ADEE, collaborating with numerous leading higher education institutions in Europe, Asia and US.",
      fee: "5000",
      Year: "6",
      CollegeImage: "",
      course: "MD",
      fee2: "4500",
      Year2: "5",
      course2: "Dentistry",
    },
    {
      id: 7,
      name: "Petre Shotaze Tbilisi Medical Academy (TMA)",
      describe:
        "Tbilisi Medical Academy is one of the first private medical schools in the history of independent Georgia. TMA was founded by a notable Georgian physician and pediatric surgeon, Prof. Petre Shotadze. From its humble beginnings in 1992 for almost 30 years, TMA is one of the pioneers of medical education in Georgia and remains to be one of the most competitive and dynamically developing institutions. During these years we have trained hundreds of successful physicians who currently work in the leading clinics in Georgia and abroad.",
      describe2:
        "TMA, as a student-oriented higher education institution, primarily seeks to teach and advance the capacity of national and international healthcare professionals innovatively by using evidence-based knowledge, whilst practically benefiting the community in Georgia through research-based outreach activities.",
      describe3:
        "The main goal of TMA is to elaborate independent and critical thinking, scientific reasoning abilities, and reasonable judgments among students, to support their development into highly qualified specialists.",
      describe4:
        "Due to the quality of teaching, the institution has been recognized by many organizations. Some of the organizations that have given recognition are WHO, NMC, Georgian Education Ministry etc. The university specializes in the field of medicine. It offers a 6-year educational programme.",
      describe5:
        " One of the biggest advantages of studying in this institution is that the degree is recognized throughout the globe. In addition to this, the university has excellent medical faculty so the students can have in-depth knowledge in the field of their choice. Thus, they are able to serve several people throughout the world. The medium of teaching followed in the university is English.",
      fee: "7000",
      Year: "6",
      CollegeImage: "",
      course: "MD",
    },
    {
      id: 8,
      name: "New Vision University (NVU)",
      describe:
        "New Vision University sparks through it’s excellence when it comes to international standard of education.",
      describe2:
        "MBBS program in New Vision University has official accreditations from National Medical Commission (NMC), and World Health Organization (WHO).",
      describe3:
        "MBBS duration in New Vision University is 6 years where last year is allocated for the course of internship. A medium used for instruction of the MBBS curriculum is in English language.",
      describe4:
        "A New Vision University ranks at 21th position in Georgia that draws the attention of foreign students.",
      describe5:
        "The university has over 1000 students from around 25 countries. New Vision University team comprises of 400 experts Faculty, Scholars, and Practitioners. Although, the university has been recently established, it is equipped with the best technology, campus infrastructure, laboratories, and a research chain. The New Vision University hospital was established in the year 2014. This makes it a perfect option for the aspirants of medical education. Students do not need to worry about internships and practical knowledge. The university upholds the values of collaboration and innovation and endeavours to prepare the learners for future needs. The mission of the university is to promote education, research, and innovation. The university believes in creation and advancement of knowledge and sharing of common values for the well-being of society.",
      fee: "7000",
      Year: "6",
      CollegeImage: "",
      course: "MD",
      fee2: "7000",
      Year2: "5",
      course2: "Dentistry",
    },
    {
      id: 9,
      name: "Tbilisi State medical university (TSMU)",
      describe:
        "Tbilisi State Medical University (TSMU) is a medical university located in Tbilisi, Georgia. It was established in 1918 and has a rich history spanning over a century. TSMU has evolved to become one of the most significant universities in Georgia and Eastern Europe. ",
      describe2:
        "The university is committed to providing a student-centred education which prioritises the scientific growth of its students. TSMU incorporates a variety of teaching and evaluation approaches to create a comprehensive learning environment. It provides opportunities for its students to engage in research projects and attend international symposiums and conferences. This focus ensures that students receive a well-rounded education that extends beyond the classroom, preparing them for successful careers in the medical field.",
      describe3:
        "The teaching at TSMU is led by an experienced faculty and professors who utilise the latest foreign textbooks, educational materials, and teaching methods. Students at this university go through a comprehensive education that provides them with a strong theoretical foundation while also developing their clinical skills.",
      describe4:
        "TSMU has an international focus and is the founder of the Eastern European Medical Association. It boasts numerous partnerships at an international level, including participation in international programmes such as ERASMUS+ and various research collaborations with over 10 countries.",
      describe5:
        "TSMU’s curriculum and examination system are aligned with the global standards defined by the Bologna Process, ensuring that students receive an education that meets both European and US standards. This means that right from the beginning, students will go through an education that will prepare them for international qualification examinations, such as the  USMLE, PLAB, and others. This approach enhances TSMU’s students' global competence and preparedness.",
      fee: "8000",
      Year: "6",
      CollegeImage: "",
      course: "MD(Eurpean)",
      fee2: "13500",
      Year2: "6",
      course2: "MD (US-MD)",
    },
    {
      id: 10,
      name: "Tbilisi State University (TSU)",
      describe:
        "Tbilisi State University (TSU) - the oldest university in Georgia! Research and high quality instruction together with extensive international networks make TSU highly demanded nationwide.",
      describe2:
        "TSU offers a wide variety of degree programs at undergraduate, graduate and doctoral levels and short courses offered in English language attracting students from all over the world.",
      describe3:
        "The university is recognized by several organizations like WHO, FAIMER, ORPHEUS. In addition to this BSUN, EUA, AMC, NMC, AMEE, EMSA have also recognized the university. The university is extremely famous among Indian students for its quality of medical education. ",
      describe4:
        " By studying in this university the Indian students can easily access good quality global education. Over the years about 8000 students from India have studied in this institution.",
      describe5:
        "The university has five branches in the region of Georgia which includes six faculties including humanities, law, economics and business, medicine, and social and political sciences, a scientific library, seven museums, 60 scientific-research laboratories and centers, and a publishing house.",
      fee: "7000",
      Year: "6",
      CollegeImage: "",
      course: "MD",
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleReadMore = (id) => {
    setUniversityDetails((prevDetails) =>
      prevDetails.map((item) =>
        item.id === id ? { ...item, readMore: !item.readMore } : item
      )
    );
  };

  return (
    <div>
      <Brudcrubs PageName="University" />
      {/* Header End */}
      {/* top section */}
      <div className="container-fluid about bg-light py-5">
        <div className="container ">
          {universityDetails.map((itm) => (
            <div className="row py-4 align-items-center" key={itm.id}>
              <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
                <div className="section-title text-start mb-5">
                  <h4 className="sub-title pe-3 mb-0">{itm.name}</h4>
                  <img
                    src="img/video-img.jpeg"
                    className="img-fluid rounded mt-3 d-block d-md-none"
                    alt=""
                  />
                  <p className="my-4 justify-text">{itm.describe}</p>
                  <p className="my-4 justify-text">{itm.describe2}</p>
                  <p className="my-4 justify-text">{itm.describe3}</p>
                  <p className="my-4 justify-text">
                    {itm.describe4}{" "}
                    {!itm.readMore && (
                      <span
                        className=" text-primary"
                        style={{
                          cursor: "pointer",
                          transition: "color 0.3s ease",
                        }}
                        onClick={() => toggleReadMore(itm.id)}
                      >
                        Read more...
                      </span>
                    )}
                  </p>

                  {itm.readMore && (
                    <div>
                      {itm.describe5 && (
                        <p className="my-4  justify-text">{itm.describe5}</p>
                      )}
                      {itm.describe6 && (
                        <p className="my-4 justify-text">{itm.describe6}</p>
                      )}
                      {itm.describe7 && (
                        <p className="my-4 justify-text">{itm.describe7}</p>
                      )}
                      {itm.describe8 && (
                        <p className="my-4 justify-text">{itm.describe8}</p>
                      )}
                      {itm.describe8 && (
                        <p className="my-4 justify-text">{itm.describe8}</p>
                      )}
                      {itm.describe9 && (
                        <p className="my-4 justify-text">{itm.describe9}</p>
                      )}
                      {itm.describe10 && (
                        <p className="my-4 justify-text">{itm.describe10}</p>
                      )}
                      {itm.describe11 && (
                        <p className="my-4 justify-text">{itm.describe11}</p>
                      )}
                      {itm.describe12 && (
                        <p className="my-4 justify-text">{itm.describe12}</p>
                      )}

                      {itm.readMore && (
                        <span
                          className="text-primary"
                          style={{
                            cursor: "pointer",
                            transition: "color 0.3s ease",
                          }}
                          onClick={() => toggleReadMore(itm.id)}
                        >
                          View Less
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-5  wow fadeInLeft" data-wow-delay="0.2s">
                <div className="about-img  ">
                  <div className="video h-100">
                    <img
                      src="img/video-img.jpeg"
                      className="img-fluid rounded w-100 h-100 "
                      alt=""
                    />
                    <button
                      type="button"
                      className="btn btn-play"
                      onClick={toggleModal}
                    >
                      <span></span>
                    </button>
                  </div>

                  {/* Video Modal */}
                  {showModal && (
                    <div
                      className="modal fade show"
                      tabIndex="-1"
                      style={{ display: "block" }}
                    >
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <div className="modal-body">
                            <button
                              type="button"
                              className="btn-close"
                              onClick={toggleModal}
                            ></button>
                            <div className="embed-responsive embed-responsive-16by9">
                              <iframe
                                className="embed-responsive-item"
                                title="logizone Education"
                                width="100%"
                                height="350"
                                src="https://www.youtube.com/embed/kYGCxNUTozI?si=wEZc_8nDJCgUNRVK?autoplay=1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* End Video Modal */}
                </div>
              </div>

              <div className="section events" id="events">
                <div className="">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="item">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="image">
                              <img src="img/yyy.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <ul>
                              <li>
                                <span className="category">University</span>
                                <h5 className="text-dark">{itm.name}</h5>
                              </li>
                              <li>
                                <span>Course</span>
                                <h6>{itm.course}</h6>
                              </li>
                              <li>
                                <span>Duration</span>
                                <h6>{itm.Year} Years</h6>
                              </li>
                              <li>
                                <span>Fee</span>
                                <h6>${itm.fee}</h6>
                              </li>
                            </ul>
                          </div>
                        </div>{" "}
                        {itm.course2 && (
                          <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-9">
                              <ul>
                                <li>
                                  <span className="" />
                                  <h4 ></h4>
                                </li>
                                <li>
                                  <h6>{itm.course2}</h6>
                                </li>
                                <li>
                                  <h6>{itm.Year2} Years</h6>
                                </li>
                                <li>
                                  <h6>${itm.fee2}</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default University;
